import {
  access,
  cp,
  mkdir,
  readFile,
  readdir,
} from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
);
const sourceRoot = path.join(projectRoot, 'assets');
const publicRoot = path.join(projectRoot, 'public', 'assets');
const manifestPath = path.join(
  projectRoot,
  'src',
  'data',
  'projects.json'
);

const manifest = JSON.parse(
  await readFile(manifestPath, 'utf8')
);
for (const project of manifest) {
  if (
    !project.description ||
    !Array.isArray(project.slides) ||
    project.slides.length === 0
  ) {
    throw new Error(
      'Некорректный проект в src/data/projects.json'
    );
  }

  for (const slide of project.slides) {
    if (
      !Number.isInteger(slide.id) ||
      typeof slide.img !== 'string' ||
      !slide.img.startsWith('/assets/')
    ) {
      throw new Error(
        `Некорректный слайд в проекте «${project.description}»`
      );
    }
    const source = path.resolve(
      sourceRoot,
      `.${slide.img.slice('/assets'.length)}`
    );
    if (!source.startsWith(`${sourceRoot}${path.sep}`))
      throw new Error(`Недопустимый путь слайда: ${slide.img}`);
    await access(source);
  }
}

await mkdir(publicRoot, { recursive: true });
for (const entry of await readdir(sourceRoot, {
  withFileTypes: true,
})) {
  if (entry.isDirectory()) {
    await cp(
      path.join(sourceRoot, entry.name),
      path.join(publicRoot, entry.name),
      { recursive: true, force: true }
    );
  }
}

<h1>Reworked <a href="https://katerinasemenova.ru"> KaterinaSemenova</a> site using Next.JS, new libs, Turbopack</h1>

<details>
<summary><b> 1. Stack / libruary usage</b></summary>
1.1 Next.JS, SASS, TS;<br>
1.2 Choose React-slick to implement slider: it has fade in/out, dots; <br>
1.3 Next 15^, React 19^ (small compatibility issue), React-dom 19^ (small compatibility issue), TS, SASS, react-loading-skeleton, react-yandex-metrika<br>
1.4 UUID for unqiue array IDs<br>
1.5 Swiper (since 0.3.13)<br></b>
1.6 Previous: multiple carousel/slider libs, react-accessible-accordion;
</details>
<hr>

<details>
<summary><b> 2. Commit / process history </b></summary>
<ul>
<li><b>v: 0.0.1 / d: 29.10.24  </b>   
project/repo init, git-flow init, first commit,</li>
<li><b>v: 0.0.1 / d: 30.10.24</b>     
The basic structure, layout and styles are copied from the original app, adapted to use Next.JS; implement scroll, add new styles: mixins and link underline animation; still have issue with SASS -> Migration;</li>
<li><b>v: 0.0.1 / d: 04.11.24</b> 
MySQL connecting attempts;</li>
<li><b>v: 0.0.1a / d: 12.11.24</b> 
While I have some problems with connecting to the DB, I decided to make a static, local resource storage as it was before; add react-slick lib to implement carousel;</li>
<li><b>v: 0.1.0 a / d: 20.11.24</b> 
Setteled on the choice of react-slick lib to implement slider; setting styles and small logic touches;</li>
<li><b>v: 0.1.5 a / d: 21.11.24</b> 
Start GH Action settings and met some deploy issues with paths; after about <b>56(!SIC)</b> deploys found out how to set next.conifg+nextjs.yml for deploying static app; I have working styles and logic, although some features like fonts and library styles don't work as well; decided to use another lib - Swiper; styling in progress; I am almost satisfied with everything;</li>
<li><b>v: 0.1.5 a / d: 10.12.24</b>
Add 'scroll to top' button when rich lowest contacts block; multiple style and logic touches;</li>
<li><b>v: 0.1.6 a / d: 11.12.24</b>
Set up font and favico paths using metadata object in layout.tsx;</li>
<li><b>v: 0.2.0 / d: 12.12.24</b>
Start skeleton loading implementation;</li>
<li><b>v: 0.2.0 / d: 17.12.24</b>
Trying to add Yandex.Metrika script into <Head>; get rid of font path issues by taking lib \*.css files into component and adding them only where they should be; add Yandex.Metrika script into build index.html ; automatisation to go.
Next won`t build up with script errors. </li>
<li><b>v: 0.2.1 / d: 18.12.24</b> 
Scroll button customizing: change arrow type and add timeout to display, but refused to implement in prod. got an issue with SSR/Client render and build diffs; Solved it by adding a `window` type check
<li><b>v: 0.2.2a / d: 24.12.24</b> </li>
After multiple attempts to use different slider and carousel libs I`m testing react-multi-carousel;</li>
<li><b>v: 0.3.0 / d: 27.12.24</b>
After trying to modify the Slide library multiple times, I decided to go with React-Slick as it covers all my/the designer's implementation requirements;
implemented accordion react-accessible-accordion lib => testing; 
faced some difficultes trying to insert Yandex-Metrika script inside the < Head >, so i used react-yandex-metrika lib with separate component, wich implements Yandex script;</li>
<li><b>v: 0.3.0 / d: 14.01.25</b>
Multiple libs update: react/dom/sass/eslint/next/pnpm; small image id refactor (should I use UUID?)</li>
<li><b>v: 0.3.1 / d: 15.01.25</b>
Start making slide description; multiple attepmts; face an issue with paragraph height. non of paragraph parents have certain height in PX;</li>
<li><b>v: 0.3.2 / d: 16.01.25</b> 
Make dynamically changing height based on <Image> height; change my SCSS mixin flex forumla; font size issue to go</li>
<li><b>v: 0.3.2 / d: 20.01.25</b>
Package updates; font issues resolved; continue skeleton loading setting;</li>
<li><b>v: 0.3.2 / d: 28.01.25</b>
Restore <b>develop</b> branch to main view: w/o accordion, skeleton and descriptions; add conditional render to remove dev issues;</li>
<li><b>v: 0.3.3 / d: 04.02.25</b>
Moved away from the idea of ​​a slider with a description, switched to Skeleton implementation;</li>
<li><b>v: 0.3.3a / d: 05.02.25</b>
Add UUID lib for unique ids; finnaly found some new Splide-lib to implement carousel/swiper w/o focus issues like it was in the Slick-slider;</li>
<li><b>v: 0.3.3a / d: 06.02.25</b>
Pagination dots set via scss selector magic!; SASS^</li>
<li><b>v: 0.3.3a / d: 07.02.25</b>
Add typeRoots setting to tsconfig;</li>
<li><b>v: 0.3.3b / d: 10.02.25</b>
Multiple libs: keen, nuka, slick, embla, alice, response carousel and others were tested; Now: Flickity; eslint^; pnpm^</li>
<li><b>v: 0.3.3.11 / d: 11.02.25</b>
I decided to assign versions based on the number of carousel/slider variations; So 11 will stand for 11 lib - AwesomeSlider. For some reason and due to unsuitable implementation, none of the recent libraries suited my needs;</li>
<li><b>v: 0.3.3.11 / d: 12.02.25</b>
Package updates, pnpm update; cleared package.json from multiple libs;</li>
<li><b>v: 0.3.3.13 / d: 20.03.25</b>
package updates, pnpm update; return to Swiper lib; created buttons that suit my plan; deploy to GH-Pages to test;</li> 
<li><b>v: 0.3.3.13d / d: 21.03.25</b> 
Continue setting Swiper; get rid of blue background while pushing buttons and achores; set 'Media' for mobile phone (<767px)</li> 
<li><b>v: 0.3.3.4 / d: 24.03.25</b> 
deps update;
</li>
<li><b>v: 0.3.3.5t / d: 03.04.25</b> 
deps update; pure-slider testinZg; replace uuid w/ nanoid;
</li>
<li><b>v: 0.3.3.5ta / d: 04.04.25</b> 
Style and positioning of bullets/description fix; deps update;
</li>
<li><b>v: 0.3.3.5t / d: 16.04.25</b> 
deps update;
</li>
<li><b>v: 0.3.3.6 / d: 21.04.25</b> 
deps update;
</li>
<li><b>v: 0.3.3.6t / d: 22.04.25</b> 
deps update; slider and dots set - testing; add loading skeleton;
</li>
<li><b>v: 0.3.3.6t / d: 08.05.25</b> 
deps update;
</li>
<li><b>v: 0.3.4 / d: 16.05.25</b> 
customizing commitizen
</li>
<li><b>v: 0.3.4 / d: 20.06.25</b> 
deps update;
</li>
<li><b>v: 0.3.5 / d: 25.06.25</b> 
refactor slider/predeploy
</li>
<li><b>v: 0.4 / d: 27.06.25</b> 
Succesfully attempt DB connection; get local version with remote images fetching; next in line is to refuse static data;
</li>
<li><b>v: 0.4.1 / d: 28.06.25</b> 
Refactor fetchData service and main page logic; prepare to refactor skeleton/lazy images;chore;
</li>
<li><b>v: 0.4.1 / d: 30.06.25</b> 
Set up commitlint/husky; Open 2 issues; fix keen-slider implementation;
</li>
<li><b>v: 0.4.2 / d: 01.07.25</b> 
Commitlint/husky/commitizen set up; 
Forward for issue[#2](https://github.com/i0ji/katerina-semenova-next/issues/2); 
Testing <Skeleton/> and loading;
Add concrete aspect ratio to correct implementation of <Image> and <Skeleton> size;
</li>
<li><b>v: 0.4.3.2 / d: 03.07.25</b> 
deps update; close issue#6; change preloading condition;
</li>
<li><b>v: 0.4.3.2t / d: 14.07.25</b> 
deps update; deploy for tests;
</li>
<li><b>v: 0.4.3.3 / d: 16.07.25</b> 
deps update; fetch mock data when in dev env;
add dark theme and theme state toggler;
</li>
<li><b>v: 0.4.4t / d: 17.07.25</b> 
finish dark theme; add accents colors and rework style system;
</li>
<li><b>v: 0.4.4.1a / d: 18.07.25</b> 
Check GooglePageSpeed insights: refactor header title link, add 
</li>
<li><b>v: 0.4.5.1c / d: 21.07.25</b> 
deps update;
</li>
<li><b>v: 0.4.5.1d / d: 23.07.25</b> 
deps update; small scroll script changes;
</li>
<li><b>v: 0.4.5 / d: 26.08.25</b> 
deps update; multiple animations fixes;
</li>
<li><b>v: 0.4.5 / d: 31.10.25</b> 
deps update;
</li>
<li><b>v: 0.4.5 / d: 21.10.25</b> 
deps update;
</li>
<li><b>v: 0.4.5 / d: 27.11.25</b> 
deps update;
</li>
<li><b>v: 0.4.5 / d: 23.01.26</b> 
deps update;
</li>
<li><b>v: 0.4.5 / d: 10.02.26</b> 
deps update; webpack vulnerabilities audit;
</li>
</li>
<li><b>v: 0.4.5 / d: 24.07.26</b> 
deps update; vulnerabilities check; pnpm update;
</li>
</ul>
</details>
<hr>

<details> 
<summary><b>3. Known issues/to go</b></summary>
[X] <del>Still have trouble with build/dev paths and aliases; Still have to change it manually when deploy to Pages or to prod;</del><br>
<b>UPD: multiple path attempts and setting changings</b><br>
<del>[X] New one: missing react-slick lib fonts, which i do not use at all. Get rid of console warning by removing Slick font-face settings from final output build. Still have to find the solution;</del><br>
<b>UPD: moved slick styles to component folder and get rid of unused classes</b><br>pnpm 0
<del>[X] Yandex.Analytics - UPD: have an integration issue; For now do not know where to put in in the dev version; I just put the script into the final bundle;</del><br>
<b>UPD: use lib to add Metrika;</b><br>
<del>[X] Implement DB with phpAdminPane;</del><br>
<b>UPD: Set two tables in php that contains my Slides data;</b><br>
<del>[X] Skeleton loading;</del><br>
[&nbsp;&nbsp;] Non typed YM script;<br>
</details>

<hr>
Version naming:<br>
t - test;<br>
a, b, c - test attempts;

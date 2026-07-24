(function () {
  'use strict';

  // ---------- Data ----------
  var currentYear = new Date().getFullYear();

  var resume = [
    { company: 'Planetaria', title: 'CEO', logo: 'planetaria', start: '2019', end: 'Present' },
    { company: 'Airbnb', title: 'Product Designer', logo: 'airbnb', start: '2014', end: '2019' },
    { company: 'Facebook', title: 'iOS Software Engineer', logo: 'facebook', start: '2011', end: '2014' },
    { company: 'Starbucks', title: 'Shift Supervisor', logo: 'starbucks', start: '2008', end: '2011' },
  ];

  var articles = [
    {
      slug: 'crafting-a-design-system-for-a-multiplanetary-future',
      date: '2022-09-05',
      title: 'Crafting a design system for a multiplanetary future',
      description: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
      body:
        '<p>Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.</p>' +
        '<p>I knew that to get it right I was going to have to replicate the viewing conditions of someone from the future, so I grabbed my space helmet from the closet, created a new Figma document, and got to work.</p>' +
        '<h2>Sermone fata</h2>' +
        '<p>Lorem markdownum, bracchia in redibam! Terque unda puppi nec, linguae posterior in utraque respicere candidus Mimasque formae; quae conantem cervice. Parcite variatus, redolentia adeunt. Tyrioque dies, naufraga sua adit partibus celanda torquere temptata, erit maneat et ramos, iam ait dominari potitus! Tibi litora matremque fumantia condi radicibus opusque.</p>',
    },
    {
      slug: 'introducing-animaginary',
      date: '2022-09-02',
      title: 'Introducing Animaginary: High performance web animations',
      description: 'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
      body:
        '<p>When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.</p>' +
        '<p>To make this possible, we needed to squeeze every drop of performance out of the browser possible. And so Animaginary was born.</p>' +
        '<pre><code>import { animate } from \'@planetaria/animaginary\'\n\nexport function MyComponent({ open, children }) {\n  return (\n    &lt;animate.div\n      in={open}\n      animateFrom="opacity-0 scale-95"\n      animateTo="opacity-100 scale-100"\n      duration={350}\n    &gt;\n      {children}\n    &lt;/animate.div&gt;\n  )\n}</code></pre>' +
        '<p>Animaginary is our new web animation library that redefines what you thought was possible on the web. Hand-written in optimized WASM, Animaginary can even animate the <code>height</code> property of an element at 60fps.</p>',
    },
    {
      slug: 'rewriting-the-cosmos-kernel-in-rust',
      date: '2022-07-14',
      title: 'Rewriting the cosmOS kernel in Rust',
      description: 'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
      body:
        '<p>When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.</p>' +
        '<pre><code>use ferris_says::say;\nuse std::io::{stdout, BufWriter};\n\nfn main() {\n    let stdout = stdout();\n    let message = String::from("Hello fellow hackers");\n    let width = message.chars().count();\n\n    let mut writer = BufWriter::new(stdout.lock());\n    say(message.as_bytes(), width, &amp;mut writer).unwrap();\n}</code></pre>' +
        '<p>I derive a large amount of my self-worth from whether or not Hacker News is impressed with the work I’m doing, so when I realized this, I cancelled all of our existing projects and started migrating everything to Rust immediately.</p>',
    },
  ];

  var projects = [
    { name: 'Planetaria', description: 'Creating technology to empower civilians to explore space on their own terms.', href: 'http://planetaria.tech', label: 'planetaria.tech', logo: 'planetaria' },
    { name: 'Animaginary', description: 'High performance web animation library, hand-written in optimized WASM.', href: '#', label: 'github.com', logo: 'animaginary' },
    { name: 'HelioStream', description: 'Real-time video streaming library, optimized for interstellar transmission.', href: '#', label: 'github.com', logo: 'heliostream' },
    { name: 'cosmOS', description: 'The operating system that powers our Planetaria space shuttles.', href: '#', label: 'github.com', logo: 'cosmos' },
    { name: 'OpenShuttle', description: 'The schematics for the first rocket I designed that successfully made it to orbit.', href: '#', label: 'github.com', logo: 'openshuttle' },
  ];

  var speaking = [
    { section: 'Conferences', items: [
      { title: 'In space, no one can watch you stream — until now', description: 'A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.', event: 'SysConf 2021', cta: 'Watch video' },
      { title: 'Lessons learned from our first product recall', description: 'They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated.', event: 'Business of Startups 2020', cta: 'Watch video' },
    ]},
    { section: 'Podcasts', items: [
      { title: 'Using design as a competitive advantage', description: 'How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria.', event: 'Encoding Design, July 2022', cta: 'Listen to podcast' },
      { title: 'Bootstrapping an aerospace company to $17M ARR', description: 'The story of how we built one of the most promising space startups in the world without taking any capital from investors.', event: 'The Escape Velocity Show, March 2022', cta: 'Listen to podcast' },
      { title: 'Programming your company operating system', description: 'On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation.', event: 'How They Work Radio, September 2021', cta: 'Listen to podcast' },
    ]},
  ];

  var uses = [
    { section: 'Workstation', items: [
      { title: '16” MacBook Pro, M1 Max, 64GB RAM (2021)', body: 'I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.' },
      { title: 'Apple Pro Display XDR (Standard Glass)', body: 'The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.' },
      { title: 'IBM Model M SSK Industrial Keyboard', body: 'They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main.' },
      { title: 'Apple Magic Trackpad', body: 'Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.' },
      { title: 'Herman Miller Aeron Chair', body: 'If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.' },
    ]},
    { section: 'Development tools', items: [
      { title: 'Sublime Text 4', body: 'I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.' },
      { title: 'iTerm2', body: 'I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use.' },
      { title: 'TablePlus', body: 'Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.' },
    ]},
    { section: 'Design', items: [
      { title: 'Figma', body: 'We started using Figma as just a design tool but now it’s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.' },
    ]},
    { section: 'Productivity', items: [
      { title: 'Alfred', body: 'It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world.' },
      { title: 'Reflect', body: 'Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.' },
      { title: 'SavvyCal', body: 'Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.' },
      { title: 'Focus', body: 'Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.' },
    ]},
  ];

  // ---------- Helpers ----------
  function el(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function formatDate(dateStr) {
    var d = new Date(dateStr + 'T00:00:00Z');
    return d.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  }
  var chevronRight = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>';
  var linkIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor" /></svg>';

  // Card markup for an article (list variant with hover)
  function articleCard(a) {
    return '' +
      '<article class="md:grid md:grid-cols-4 md:items-baseline">' +
        '<div class="md:col-span-3 group relative flex flex-col items-start">' +
          '<h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">' +
            '<div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>' +
            '<a href="#/articles/' + a.slug + '"><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">' + esc(a.title) + '</span></a>' +
          '</h2>' +
          '<time datetime="' + a.date + '" class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>' + formatDate(a.date) + '</time>' +
          '<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">' + esc(a.description) + '</p>' +
          '<div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Read article' + chevronRight + '</div>' +
        '</div>' +
        '<time datetime="' + a.date + '" class="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500">' + formatDate(a.date) + '</time>' +
      '</article>';
  }

  // Home article card (simple, no side date column)
  function homeArticleCard(a) {
    return '' +
      '<div class="group relative flex flex-col items-start">' +
        '<h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">' +
          '<div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>' +
          '<a href="#/articles/' + a.slug + '"><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">' + esc(a.title) + '</span></a>' +
        '</h2>' +
        '<time datetime="' + a.date + '" class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>' + formatDate(a.date) + '</time>' +
        '<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">' + esc(a.description) + '</p>' +
        '<div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Read article' + chevronRight + '</div>' +
      '</div>';
  }

  function appearanceCard(a) {
    return '' +
      '<article class="group relative flex flex-col items-start">' +
        '<h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">' +
          '<div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>' +
          '<a href="#"><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">' + esc(a.title) + '</span></a>' +
        '</h3>' +
        '<p class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>' + esc(a.event) + '</p>' +
        '<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">' + esc(a.description) + '</p>' +
        '<div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">' + esc(a.cta) + chevronRight + '</div>' +
      '</article>';
  }

  function section(title, innerHtml) {
    return '' +
      '<section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">' +
        '<div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">' +
          '<h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">' + esc(title) + '</h2>' +
          '<div class="md:col-span-3">' + innerHtml + '</div>' +
        '</div>' +
      '</section>';
  }

  // ---------- Render ----------
  function setImages(root) {
    (root || document).querySelectorAll('img[data-img]').forEach(function (img) {
      var key = img.getAttribute('data-img');
      if (window.IMG && window.IMG[key]) img.src = window.IMG[key];
    });
  }

  function render() {
    // resume
    document.getElementById('resume-list').innerHTML = resume.map(function (r) {
      return '' +
        '<li class="flex gap-4">' +
          '<div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">' +
            '<img src="' + (window.LOGO[r.logo] || '') + '" alt="" class="h-7 w-7" />' +
          '</div>' +
          '<dl class="flex flex-auto flex-wrap gap-x-2">' +
            '<dt class="sr-only">Company</dt><dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">' + esc(r.company) + '</dd>' +
            '<dt class="sr-only">Role</dt><dd class="text-xs text-zinc-500 dark:text-zinc-400">' + esc(r.title) + '</dd>' +
            '<dt class="sr-only">Date</dt><dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"><time>' + esc(r.start) + '</time> <span aria-hidden="true">—</span> <time>' + esc(r.end) + '</time></dd>' +
          '</dl>' +
        '</li>';
    }).join('');

    document.getElementById('home-articles').innerHTML = articles.slice(0, 4).map(homeArticleCard).join('');
    document.getElementById('articles-list').innerHTML = articles.map(articleCard).join('');

    document.getElementById('projects-grid').innerHTML = projects.map(function (p) {
      return '' +
        '<li class="group relative flex flex-col items-start">' +
          '<div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">' +
            '<img src="' + (window.LOGO[p.logo] || '') + '" alt="" class="h-8 w-8" />' +
          '</div>' +
          '<h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">' +
            '<div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>' +
            '<a href="' + p.href + '"' + (p.href.indexOf('http') === 0 ? ' target="_blank" rel="noreferrer"' : '') + '><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">' + esc(p.name) + '</span></a>' +
          '</h2>' +
          '<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">' + esc(p.description) + '</p>' +
          '<p class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">' + linkIcon + '<span class="ml-2">' + esc(p.label) + '</span></p>' +
        '</li>';
    }).join('');

    document.getElementById('speaking-content').innerHTML = speaking.map(function (s) {
      var inner = '<div class="space-y-16">' + s.items.map(appearanceCard).join('') + '</div>';
      return section(s.section, inner);
    }).join('');

    document.getElementById('uses-content').innerHTML = uses.map(function (s) {
      var inner = '<ul role="list" class="space-y-16">' + s.items.map(function (t) {
        return '' +
          '<li class="group relative flex flex-col items-start">' +
            '<h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">' + esc(t.title) + '</h3>' +
            '<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">' + esc(t.body) + '</p>' +
          '</li>';
      }).join('') + '</ul>';
      return section(s.section, inner);
    }).join('');

    document.getElementById('year').textContent = currentYear;
    setImages(document);
  }

  // ---------- Router ----------
  var NAV_KEYS = ['about', 'articles', 'projects', 'speaking', 'uses'];

  function renderArticle(slug) {
    var a = null;
    for (var i = 0; i < articles.length; i++) { if (articles[i].slug === slug) { a = articles[i]; break; } }
    if (!a) return false;
    document.getElementById('article-title').textContent = a.title;
    document.querySelector('#article-date span:last-child').textContent = formatDate(a.date);
    document.getElementById('article-body').innerHTML = a.body;
    return true;
  }

  function parseRoute() {
    var h = window.location.hash.replace(/^#\/?/, ''); // e.g. "articles/slug"
    var parts = h.split('/').filter(Boolean);
    if (parts.length === 0) return { page: 'home' };
    if (parts[0] === 'articles' && parts[1]) return { page: 'article', slug: parts.slice(1).join('/') };
    if (NAV_KEYS.indexOf(parts[0]) !== -1) return { page: parts[0] };
    return { page: 'home' };
  }

  function showPage(route) {
    var pages = document.querySelectorAll('.page');
    var target = route.page;
    if (route.page === 'article' && !renderArticle(route.slug)) target = 'articles';
    pages.forEach(function (p) { p.hidden = p.getAttribute('data-page') !== target; });

    var isHome = target === 'home';
    document.getElementById('home-avatar').hidden = !isHome;
    document.getElementById('home-avatar-row').hidden = !isHome;
    document.getElementById('small-avatar').style.visibility = isHome ? 'hidden' : 'visible';

    // nav active state — "article" highlights Articles
    var activeKey = target === 'article' ? 'articles' : target;
    document.querySelectorAll('#desktop-nav a[data-nav]').forEach(function (link) {
      var active = link.getAttribute('data-nav') === activeKey;
      link.className = 'relative block px-3 py-2 transition ' + (active ? 'text-teal-500 dark:text-teal-400' : 'hover:text-teal-500 dark:hover:text-teal-400');
      var existing = link.querySelector('.nav-underline');
      if (existing) existing.remove();
      if (active) {
        var span = document.createElement('span');
        span.className = 'nav-underline absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0';
        link.appendChild(span);
      }
    });

    document.title = titleFor(target, route.slug);
    window.scrollTo(0, 0);
  }

  function titleFor(page, slug) {
    switch (page) {
      case 'about': return 'About - Raja Munisamy';
      case 'articles': return 'Articles - Raja Munisamy';
      case 'projects': return 'Projects - Raja Munisamy';
      case 'speaking': return 'Speaking - Raja Munisamy';
      case 'uses': return 'Uses - Raja Munisamy';
      case 'article':
        for (var i = 0; i < articles.length; i++) if (articles[i].slug === slug) return articles[i].title + ' - Raja Munisamy';
        return 'Articles - Raja Munisamy';
      default: return 'Raja Munisamy - Full stack web developer, founder, and avid gamer';
    }
  }

  function onHashChange() { closeMobileMenu(); showPage(parseRoute()); }

  // ---------- Dark mode ----------
  document.getElementById('mode-toggle').addEventListener('click', function () {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(function () { document.documentElement.classList.remove('[&_*]:!transition-none'); }, 0);
    var isDark = document.documentElement.classList.toggle('dark');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark === systemDark) { try { delete window.localStorage.isDarkMode; } catch (e) {} }
    else { try { window.localStorage.isDarkMode = isDark ? 'true' : 'false'; } catch (e) {} }
  });

  // ---------- Mobile menu ----------
  function openMobileMenu() { document.getElementById('mobile-menu').hidden = false; }
  function closeMobileMenu() { document.getElementById('mobile-menu').hidden = true; }
  document.getElementById('mobile-menu-btn').addEventListener('click', openMobileMenu);
  document.getElementById('mobile-menu-close').addEventListener('click', closeMobileMenu);
  document.getElementById('mobile-menu-overlay').addEventListener('click', closeMobileMenu);
  document.querySelectorAll('.mobile-link').forEach(function (l) { l.addEventListener('click', closeMobileMenu); });

  // ---------- Init ----------
  render();
  window.addEventListener('hashchange', onHashChange);
  showPage(parseRoute());
})();

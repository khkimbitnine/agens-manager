



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>jquery.mb.extruder/mbExtruder.js at master · pupunzi/jquery.mb.extruder</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="pupunzi/jquery.mb.extruder" name="twitter:title" /><meta content="jquery.mb.extruder - A sliding panel on jQuery framework" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/56659?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/56659?v=3&amp;s=400" property="og:image" /><meta content="pupunzi/jquery.mb.extruder" property="og:title" /><meta content="https://github.com/pupunzi/jquery.mb.extruder" property="og:url" /><meta content="jquery.mb.extruder - A sliding panel on jQuery framework" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="6AF3C5CB:2BF0:1F0D7C50:54D9B550" name="octolytics-dimension-request_id" /><meta content="6812085" name="octolytics-actor-id" /><meta content="procarrie" name="octolytics-actor-login" /><meta content="fef404aa654d04a08ad139450c69de0fe52e30b6cf8586fc5368a419b0468e7d" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="vqSjRNaqmn7xLE7eM78GlDQjVGp++P50efCszZbIDZP4iMua9ERAWTqzhdffG1QNtja1BMGXjvppCcN+mOIe5Q==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-ef721e11e3924bc9cc15ba51e2527ee4120e1b6712ba27ee293459c141139ad8.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-c4d064b72a3d62a75e227fddc0ac4eb74c198e45eca0cc0c231eabc1396885d2.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="0a6c7a0ed4a13150de6a78c16b91b081">

      
  <meta name="description" content="jquery.mb.extruder - A sliding panel on jQuery framework">
  <meta name="go-import" content="github.com/pupunzi/jquery.mb.extruder git https://github.com/pupunzi/jquery.mb.extruder.git">

  <meta content="56659" name="octolytics-dimension-user_id" /><meta content="pupunzi" name="octolytics-dimension-user_login" /><meta content="559660" name="octolytics-dimension-repository_id" /><meta content="pupunzi/jquery.mb.extruder" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="559660" name="octolytics-dimension-repository_network_root_id" /><meta content="pupunzi/jquery.mb.extruder" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/pupunzi/jquery.mb.extruder/commits/master.atom" rel="alternate" title="Recent Commits to jquery.mb.extruder:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/pupunzi/jquery.mb.extruder/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/pupunzi/jquery.mb.extruder/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/procarrie" data-ga-click="Header, go to profile, text:username">
      <img alt="procarrie" class="avatar" data-user="6812085" height="20" src="https://avatars0.githubusercontent.com/u/6812085?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">procarrie</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="pupunzi/jquery.mb.extruder">This repository</span>
    </li>
      <li>
        <a href="/pupunzi/jquery.mb.extruder/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4IGwEB/80KG5p61647QKawMfNWxiS7/DnBFyQ5+pzjjLSaT4wOiiqTFrEx+D1kyBpbgQZn8o2Uox4LrGgbmUmQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="e3UkWm7tpBC/h3iQNlXTcZ4+9BE0mwWNCxqcmdjufSIHiGRGY+1OjFQTEQbfQtQzsaWbg6fzsGmY6h8IUkGR4A==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="559660" />

      <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/pupunzi/jquery.mb.extruder/watchers">
          7
        </a>
        <a href="/pupunzi/jquery.mb.extruder/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>

  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/pupunzi/jquery.mb.extruder/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="umWEqWXWspdrBQf29p2uKjqHAFo8GJFzu/TPs9GksKBI2uroC/rDAL0xFqHlAvDVqmUVlWYgmPKo297IxNT/1Q==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar pupunzi/jquery.mb.extruder">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/pupunzi/jquery.mb.extruder/stargazers">
          67
        </a>
</form>
    <form accept-charset="UTF-8" action="/pupunzi/jquery.mb.extruder/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kMpEiPuYckn26U9JkUCzuu8zy/N0hcfxlKEtj0lGUdBR4qCWj7OKMZR06naAoWM3b5/yLR512tlcNMCX50HoTQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star pupunzi/jquery.mb.extruder">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/pupunzi/jquery.mb.extruder/stargazers">
          67
        </a>
</form>  </div>

  </li>

        <li>
          <a href="/pupunzi/jquery.mb.extruder/fork" class="minibutton with-count js-toggler-target tooltipped-n" title="Fork your own copy of pupunzi/jquery.mb.extruder to your account" aria-label="Fork your own copy of pupunzi/jquery.mb.extruder to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/pupunzi/jquery.mb.extruder/network" class="social-count">16</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/pupunzi" class="url fn" itemprop="url" rel="author"><span itemprop="title">pupunzi</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/pupunzi/jquery.mb.extruder" class="js-current-repository" data-pjax="#js-repo-pjax-container">jquery.mb.extruder</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/pupunzi/jquery.mb.extruder/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/pupunzi/jquery.mb.extruder" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /pupunzi/jquery.mb.extruder">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/pupunzi/jquery.mb.extruder/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /pupunzi/jquery.mb.extruder/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/pupunzi/jquery.mb.extruder/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /pupunzi/jquery.mb.extruder/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/pupunzi/jquery.mb.extruder/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /pupunzi/jquery.mb.extruder/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/pupunzi/jquery.mb.extruder/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /pupunzi/jquery.mb.extruder/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/pupunzi/jquery.mb.extruder/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /pupunzi/jquery.mb.extruder/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/pupunzi/jquery.mb.extruder.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:pupunzi/jquery.mb.extruder.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/pupunzi/jquery.mb.extruder" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save pupunzi/jquery.mb.extruder to your computer and use it in GitHub Desktop." aria-label="Save pupunzi/jquery.mb.extruder to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/pupunzi/jquery.mb.extruder/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of pupunzi/jquery.mb.extruder as a zip file"
                   title="Download the contents of pupunzi/jquery.mb.extruder as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/pupunzi/jquery.mb.extruder/blob/defee4c86dfde76d0955f86a46c64d8d77994518/inc/mbExtruder.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:ed016bf14b96a3dfccc752168087eaef -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/blob/master/inc/mbExtruder.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/v.2.3/inc/mbExtruder.js"
                 data-name="v.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v.2.3">v.2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/2.5.5/inc/mbExtruder.js"
                 data-name="2.5.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.5">2.5.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/2.5.4/inc/mbExtruder.js"
                 data-name="2.5.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.4">2.5.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/2.5.3/inc/mbExtruder.js"
                 data-name="2.5.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.3">2.5.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/2.5.1/inc/mbExtruder.js"
                 data-name="2.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.1">2.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/2.5.0/inc/mbExtruder.js"
                 data-name="2.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.0">2.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/2.4.0/inc/mbExtruder.js"
                 data-name="2.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.4.0">2.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/2.2/inc/mbExtruder.js"
                 data-name="2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.2">2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/2.1/inc/mbExtruder.js"
                 data-name="2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1">2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/2.0/inc/mbExtruder.js"
                 data-name="2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0">2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/1.9.0rc1/inc/mbExtruder.js"
                 data-name="1.9.0rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.0rc1">1.9.0rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/1.9.0/inc/mbExtruder.js"
                 data-name="1.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.0">1.9.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/1.8.9rc1/inc/mbExtruder.js"
                 data-name="1.8.9rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.9rc1">1.8.9rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/1.8.6rc1/inc/mbExtruder.js"
                 data-name="1.8.6rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.6rc1">1.8.6rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/1.8.5/inc/mbExtruder.js"
                 data-name="1.8.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.5">1.8.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/1.8.1/inc/mbExtruder.js"
                 data-name="1.8.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.1">1.8.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/1.8.0/inc/mbExtruder.js"
                 data-name="1.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.0">1.8.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pupunzi/jquery.mb.extruder/tree/1.6/inc/mbExtruder.js"
                 data-name="1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6">1.6</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/pupunzi/jquery.mb.extruder/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pupunzi/jquery.mb.extruder" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.mb.extruder</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pupunzi/jquery.mb.extruder/tree/master/inc" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">inc</span></a></span><span class="separator">/</span><strong class="final-path">mbExtruder.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="mb.jquery.components" class="avatar" data-user="56659" height="24" src="https://avatars0.githubusercontent.com/u/56659?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/pupunzi" rel="author">pupunzi</a></span>
        <time datetime="2014-12-19T21:32:01Z" is="relative-time">Dec 19, 2014</time>
        <div class="commit-title">
            <a href="/pupunzi/jquery.mb.extruder/commit/defee4c86dfde76d0955f86a46c64d8d77994518" class="message" data-pjax="true" title="various fix">various fix</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="mb.jquery.components" data-user="56659" height="24" src="https://avatars0.githubusercontent.com/u/56659?v=3&amp;s=48" width="24" />
            <a href="/pupunzi">pupunzi</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span class="mode" title="File mode">executable file</span>
          <span class="meta-divider"></span>
          <span>521 lines (466 sloc)</span>
          <span class="meta-divider"></span>
        <span>20.377 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/pupunzi/jquery.mb.extruder/raw/master/inc/mbExtruder.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/pupunzi/jquery.mb.extruder/blame/master/inc/mbExtruder.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/pupunzi/jquery.mb.extruder/commits/master/inc/mbExtruder.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/pupunzi/jquery.mb.extruder/edit/master/inc/mbExtruder.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/pupunzi/jquery.mb.extruder/delete/master/inc/mbExtruder.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * ******************************************************************************</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> *  jquery.mb.components</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> *  file: mbExtruder.js</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c"> *  Open lab srl, Firenze - Italy</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c"> *  email: matteo@open-lab.com</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c"> *  site: 	http://pupunzi.com</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c"> *  blog:	http://pupunzi.open-lab.com</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c"> * 	http://open-lab.com</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="pl-c"> *  Licences: MIT, GPL</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="pl-c"> *  http://www.opensource.org/licenses/mit-license.php</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="pl-c"> *  http://www.gnu.org/licenses/gpl.html</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line"><span class="pl-c"> *  last modified: 08/05/14 20.00</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line"><span class="pl-c"> *  *****************************************************************************</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line"><span class="pl-c">/*Browser detection patch*/</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line"><span class="pl-s">var</span> nAgt <span class="pl-k">=</span> <span class="pl-s3">navigator</span>.<span class="pl-sc">userAgent</span>;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line"><span class="pl-k">if</span> (<span class="pl-k">!</span>jQuery.browser) {</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">	jQuery.browser <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">	jQuery.browser.mozilla <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">	jQuery.browser.webkit <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">	jQuery.browser.opera <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">	jQuery.browser.safari <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">	jQuery.browser.chrome <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">	jQuery.browser.msie <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">	jQuery.browser.ua <span class="pl-k">=</span> nAgt;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">	jQuery.browser.<span class="pl-sc">name</span> <span class="pl-k">=</span> <span class="pl-s3">navigator</span>.<span class="pl-sc">appName</span>;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">	jQuery.browser.fullVersion <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s3">parseFloat</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>);</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">	jQuery.browser.majorVersion <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>, <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">	<span class="pl-s">var</span> nameOffset, verOffset, ix;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">!=</span> (verOffset <span class="pl-k">=</span> nAgt.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Opera<span class="pl-pds">&quot;</span></span>)))jQuery.browser.opera <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">0</span>, jQuery.browser.<span class="pl-sc">name</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Opera<span class="pl-pds">&quot;</span></span>, jQuery.browser.fullVersion <span class="pl-k">=</span> nAgt.<span class="pl-s3">substring</span>(verOffset <span class="pl-k">+</span> <span class="pl-c1">6</span>), <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">!=</span> (verOffset <span class="pl-k">=</span> nAgt.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Version<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">&amp;&amp;</span> (jQuery.browser.fullVersion <span class="pl-k">=</span> nAgt.<span class="pl-s3">substring</span>(verOffset <span class="pl-k">+</span> <span class="pl-c1">8</span>)); <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">!=</span> (verOffset <span class="pl-k">=</span> nAgt.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>OPR<span class="pl-pds">&quot;</span></span>)))jQuery.browser.opera <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">0</span>, jQuery.browser.<span class="pl-sc">name</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Opera<span class="pl-pds">&quot;</span></span>, jQuery.browser.fullVersion <span class="pl-k">=</span> nAgt.<span class="pl-s3">substring</span>(verOffset <span class="pl-k">+</span> <span class="pl-c1">4</span>); <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">!=</span> (verOffset <span class="pl-k">=</span> nAgt.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>MSIE<span class="pl-pds">&quot;</span></span>)))jQuery.browser.msie <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">0</span>, jQuery.browser.<span class="pl-sc">name</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Microsoft Internet Explorer<span class="pl-pds">&quot;</span></span>, jQuery.browser.fullVersion <span class="pl-k">=</span> nAgt.<span class="pl-s3">substring</span>(verOffset <span class="pl-k">+</span> <span class="pl-c1">5</span>); <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">!=</span> nAgt.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Trident<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">		jQuery.browser.msie <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">		jQuery.browser.<span class="pl-sc">name</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Microsoft Internet Explorer<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">		<span class="pl-s">var</span> start <span class="pl-k">=</span> nAgt.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>rv:<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-c1">3</span>, end <span class="pl-k">=</span> start <span class="pl-k">+</span> <span class="pl-c1">4</span>;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">		jQuery.browser.fullVersion <span class="pl-k">=</span> nAgt.<span class="pl-s3">substring</span>(start, end)</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">	} else-1 != (verOffset = nAgt.indexOf(&quot;Chrome&quot;)) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = &quot;Chrome&quot;, jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf(&quot;Safari&quot;)) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = &quot;Safari&quot;, jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf(&quot;Version&quot;)) &amp;&amp; (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf(&quot;AppleWebkit&quot;)) ? (jQuery.browser.webkit = !0, jQuery.browser.name = &quot;Safari&quot;, jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf(&quot;Version&quot;)) &amp;&amp; (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf(&quot;Firefox&quot;)) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = &quot;Firefox&quot;, jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(&quot; &quot;) + 1) &lt; (verOffset = nAgt.lastIndexOf(&quot;/&quot;)) &amp;&amp; (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() &amp;&amp; (jQuery.browser.name = navigator.appName));</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">	<span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">!=</span> (ix <span class="pl-k">=</span> jQuery.browser.fullVersion.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>;<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">&amp;&amp;</span> (jQuery.browser.fullVersion <span class="pl-k">=</span> jQuery.browser.fullVersion.<span class="pl-s3">substring</span>(<span class="pl-c1">0</span>, ix));</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">	<span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">!=</span> (ix <span class="pl-k">=</span> jQuery.browser.fullVersion.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>)) <span class="pl-k">&amp;&amp;</span> (jQuery.browser.fullVersion <span class="pl-k">=</span> jQuery.browser.fullVersion.<span class="pl-s3">substring</span>(<span class="pl-c1">0</span>, ix));</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">	jQuery.browser.majorVersion <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> jQuery.browser.fullVersion, <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">	<span class="pl-s3">isNaN</span>(jQuery.browser.majorVersion) <span class="pl-k">&amp;&amp;</span> (jQuery.browser.fullVersion <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s3">parseFloat</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>), jQuery.browser.majorVersion <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>, <span class="pl-c1">10</span>));</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">	jQuery.browser.<span class="pl-sc">version</span> <span class="pl-k">=</span> jQuery.browser.majorVersion</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">}</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">jQuery.browser.android <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>Android<span class="pl-pds">/</span>i</span>.<span class="pl-s3">test</span>(nAgt);</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">jQuery.browser.blackberry <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>BlackBerry<span class="pl-pds">/</span>i</span>.<span class="pl-s3">test</span>(nAgt);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">jQuery.browser.ios <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>iPhone<span class="pl-k">|</span>iPad<span class="pl-k">|</span>iPod<span class="pl-pds">/</span>i</span>.<span class="pl-s3">test</span>(nAgt);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">jQuery.browser.operaMobile <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>Opera Mini<span class="pl-pds">/</span>i</span>.<span class="pl-s3">test</span>(nAgt);</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">jQuery.browser.windowsMobile <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>IEMobile<span class="pl-pds">/</span>i</span>.<span class="pl-s3">test</span>(nAgt);</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">jQuery.browser.mobile <span class="pl-k">=</span> jQuery.browser.android <span class="pl-k">||</span> jQuery.browser.blackberry <span class="pl-k">||</span> jQuery.browser.ios <span class="pl-k">||</span> jQuery.browser.windowsMobile <span class="pl-k">||</span> jQuery.browser.operaMobile;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line"><span class="pl-c"> * Metadata - jQuery plugin for parsing metadata from elements</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line"><span class="pl-c"> * Copyright (c) 2006 John Resig, Yehuda Katz, Jörn Zaefferer, Paul McLanahan</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line"><span class="pl-c"> * Dual licensed under the MIT and GPL licenses:</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line"><span class="pl-c"> *   http://www.opensource.org/licenses/mit-license.php</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line"><span class="pl-c"> *   http://www.gnu.org/licenses/gpl.html</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">(<span class="pl-st">function</span>(<span class="pl-vpf">c</span>){c.extend({metadata<span class="pl-k">:</span>{defaults<span class="pl-k">:</span>{type<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>,name<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>metadata<span class="pl-pds">&quot;</span></span>,cre<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span>({<span class="pl-c1">.</span><span class="pl-k">*</span>})<span class="pl-pds">/</span></span>,single<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>metadata<span class="pl-pds">&quot;</span></span>},<span class="pl-en">setType</span>:<span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>){<span class="pl-v">this</span>.defaults.<span class="pl-sc">type</span><span class="pl-k">=</span>b;<span class="pl-v">this</span>.defaults.<span class="pl-sc">name</span><span class="pl-k">=</span>c},<span class="pl-en">get</span>:<span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">f</span>){<span class="pl-s">var</span> d<span class="pl-k">=</span>c.extend({},<span class="pl-v">this</span>.defaults,f);d.single.<span class="pl-sc">length</span><span class="pl-k">||</span>(d.single<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>metadata<span class="pl-pds">&quot;</span></span>);<span class="pl-s">var</span> a<span class="pl-k">=</span>c.<span class="pl-sc">data</span>(b,d.single);<span class="pl-k">if</span>(a)<span class="pl-k">return</span> a;a<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>{}<span class="pl-pds">&quot;</span></span>;<span class="pl-k">if</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>d.<span class="pl-sc">type</span>){<span class="pl-s">var</span> e<span class="pl-k">=</span>d.cre.<span class="pl-s3">exec</span>(b.<span class="pl-sc">className</span>);e<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>e[<span class="pl-c1">1</span>])}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>elem<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>d.<span class="pl-sc">type</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>b.getElementsByTagName)<span class="pl-k">return</span>;e<span class="pl-k">=</span>b.<span class="pl-s3">getElementsByTagName</span>(d.<span class="pl-sc">name</span>);e.<span class="pl-sc">length</span><span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>c.trim(e[<span class="pl-c1">0</span>].innerHTML))}<span class="pl-k">else</span> <span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">!=</span> b.getAttribute<span class="pl-k">&amp;&amp;</span>(e<span class="pl-k">=</span>b.<span class="pl-s3">getAttribute</span>(d.<span class="pl-sc">name</span>))<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>e);<span class="pl-c1">0</span><span class="pl-k">&gt;</span>a.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>{<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>{<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span>);a<span class="pl-k">=</span><span class="pl-s3">eval</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);c.<span class="pl-sc">data</span>(b,d.single,a);<span class="pl-k">return</span> a}}});<span class="pl-s3">c.fn</span>.<span class="pl-en">metadata</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">b</span>){<span class="pl-k">return</span> c.metadata.get(<span class="pl-v">this</span>[<span class="pl-c1">0</span>],b)}})(jQuery);</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line"><span class="pl-c">/***************************************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">(<span class="pl-st">function</span>(<span class="pl-vpf">$</span>) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">	<span class="pl-s3">document</span>.extruder<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Object</span>();</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">	<span class="pl-s3">document</span>.extruder.<span class="pl-sc">left</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">	<span class="pl-s3">document</span>.extruder.<span class="pl-sc">top</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">	<span class="pl-s3">document</span>.extruder.<span class="pl-sc">bottom</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">	<span class="pl-s3">document</span>.extruder.<span class="pl-sc">right</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">	<span class="pl-s3">document</span>.extruder.idx<span class="pl-k">=</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">	<span class="pl-s">var</span> isIE<span class="pl-k">=</span>$.browser.msie;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">	$.mbExtruder<span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">		author<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Matteo Bicocchi<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">		version<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>2.5.5<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">		defaults<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">			width<span class="pl-k">:</span><span class="pl-c1">350</span>,</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">			positionFixed<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">			sensibility<span class="pl-k">:</span><span class="pl-c1">800</span>,</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">			position<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">			accordionPanels<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">			top<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">			extruderOpacity<span class="pl-k">:</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">			flapMargin<span class="pl-k">:</span><span class="pl-c1">35</span>,</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">			textOrientation<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>bt<span class="pl-pds">&quot;</span></span>, <span class="pl-c">// or &quot;tb&quot; (top-bottom or bottom-top)</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">			<span class="pl-en">onExtOpen</span>:<span class="pl-st">function</span>(){},</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">			<span class="pl-en">onExtContentLoad</span>:<span class="pl-st">function</span>(){},</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">			<span class="pl-en">onExtClose</span>:<span class="pl-st">function</span>(){},</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">			hidePanelsOnClose<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">			closeOnClick<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">			closeOnExternalClick<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">			autoCloseTime<span class="pl-k">:</span><span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">			autoOpenTime<span class="pl-k">:</span><span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">			slideTimer<span class="pl-k">:</span><span class="pl-c1">300</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">		<span class="pl-en">buildMbExtruder</span>: <span class="pl-st">function</span>(<span class="pl-vpf">options</span>){</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.each (<span class="pl-st">function</span> (){</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">				<span class="pl-v">this</span>.<span class="pl-sc">options</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">				$.extend (<span class="pl-v">this</span>.<span class="pl-sc">options</span>, $.mbExtruder.defaults);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">				$.extend (<span class="pl-v">this</span>.<span class="pl-sc">options</span>, options);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">				<span class="pl-v">this</span>.idx<span class="pl-k">=</span><span class="pl-s3">document</span>.extruder.idx;</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">				<span class="pl-s3">document</span>.extruder.idx<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">				<span class="pl-s">var</span> extruder,extruderContent,wrapper,extruderStyle,wrapperStyle,txt,closeTimer,openTimer;</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">				extruder<span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">				extruderContent<span class="pl-k">=</span>extruder.html();</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">				extruder.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>zIndex<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">				<span class="pl-s">var</span> isVertical <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>right<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">				<span class="pl-s">var</span> extW<span class="pl-k">=</span> isVertical<span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">				<span class="pl-s">var</span> c<span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div/&gt;<span class="pl-pds">&quot;</span></span>).addClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>extruder-content<span class="pl-pds">&quot;</span></span>).css({overflow<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span>, width<span class="pl-k">:</span>extW});</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">				c.append(extruderContent);</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">				extruder.html(c);</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">				<span class="pl-s">var</span> position<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.positionFixed<span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>fixed<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">				extruder.addClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>extruder<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">				extruder.addClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.position);</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">				<span class="pl-s">var</span> isHorizontal <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>bottom<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">				extruderStyle <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">								<span class="pl-v">this</span>.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">				{position<span class="pl-k">:</span>position,top<span class="pl-k">:</span><span class="pl-c1">0</span>,left<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>50%<span class="pl-pds">&quot;</span></span>,marginLeft<span class="pl-k">:-</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>/<span class="pl-c1">2</span>,width<span class="pl-k">:</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>}<span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">								<span class="pl-v">this</span>.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>bottom<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">				{position<span class="pl-k">:</span>position,bottom<span class="pl-k">:</span><span class="pl-c1">0</span>,left<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>50%<span class="pl-pds">&quot;</span></span>,marginLeft<span class="pl-k">:-</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>/<span class="pl-c1">2</span>,width<span class="pl-k">:</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>}<span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">								<span class="pl-v">this</span>.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">				{position<span class="pl-k">:</span>position,top<span class="pl-k">:</span><span class="pl-c1">0</span>,left<span class="pl-k">:</span><span class="pl-c1">0</span>,width<span class="pl-k">:</span><span class="pl-c1">1</span>}<span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">				{position<span class="pl-k">:</span>position,top<span class="pl-k">:</span><span class="pl-c1">0</span>,right<span class="pl-k">:</span><span class="pl-c1">0</span>,width<span class="pl-k">:</span><span class="pl-c1">1</span>};</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">				extruder.css(extruderStyle);</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span>isIE) extruder.css({opacity<span class="pl-k">:</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.extruderOpacity});</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">				extruder.wrapInner(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div class=&#39;ext_wrapper&#39;&gt;&lt;/div&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">				wrapper<span class="pl-k">=</span> extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.ext_wrapper<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">				wrapperStyle<span class="pl-k">=</span>{position<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>, width<span class="pl-k">:</span>isVertical<span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>};</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">				wrapper.css(wrapperStyle);</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">				<span class="pl-k">if</span> (isHorizontal){</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">					<span class="pl-v">this</span>.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span> <span class="pl-s3">document</span>.extruder.<span class="pl-sc">top</span><span class="pl-k">++</span> <span class="pl-k">:</span> <span class="pl-s3">document</span>.extruder.<span class="pl-sc">bottom</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">					<span class="pl-k">if</span> (<span class="pl-s3">document</span>.extruder.<span class="pl-sc">top</span> <span class="pl-k">&gt;</span><span class="pl-c1">1</span> <span class="pl-k">||</span> <span class="pl-s3">document</span>.extruder.<span class="pl-sc">bottom</span><span class="pl-k">&gt;</span><span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">						<span class="pl-s3">alert</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>more than 1 mb.extruder on top or bottom is not supported jet... hope soon!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">				<span class="pl-k">if</span> ($.metadata){</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">					$.metadata.setType(<span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">					<span class="pl-k">if</span> (extruder.metadata().<span class="pl-sc">title</span>) extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>extTitle<span class="pl-pds">&quot;</span></span>,extruder.metadata().<span class="pl-sc">title</span>);</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">					<span class="pl-k">if</span> (extruder.metadata().url) extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>extUrl<span class="pl-pds">&quot;</span></span>,extruder.metadata().url);</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">					<span class="pl-k">if</span> (extruder.metadata().<span class="pl-sc">data</span>) extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>extData<span class="pl-pds">&quot;</span></span>,extruder.metadata().<span class="pl-sc">data</span>);</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">				<span class="pl-s">var</span> flapFooter<span class="pl-k">=</span>$(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div class=&#39;footer&#39;/&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">				<span class="pl-s">var</span> flap<span class="pl-k">=</span>$(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div class=&#39;flap&#39;&gt;&lt;span class=&#39;flapLabel&#39;/&gt;&lt;/div&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-s3">document</span>.extruder.<span class="pl-sc">bottom</span>){</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">					wrapper.prepend(flapFooter);</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">					wrapper.prepend(flap);</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">				}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">					wrapper.append(flapFooter);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">					wrapper.append(flap);</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">				txt<span class="pl-k">=</span>extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>extTitle<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span>extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>extTitle<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">				<span class="pl-s">var</span> flapLabel <span class="pl-k">=</span> extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.flapLabel<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">				flapLabel.<span class="pl-sc">text</span>(txt);</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">				<span class="pl-k">if</span>(isVertical){</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">					flapLabel.html(txt).css({whiteSpace<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>noWrap<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">					<span class="pl-s">var</span> orientation<span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.textOrientation <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>tb<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">					<span class="pl-s">var</span> labelH<span class="pl-k">=</span>extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.flapLabel<span class="pl-pds">&#39;</span></span>).getFlipTextDim()[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">					extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.flapLabel<span class="pl-pds">&#39;</span></span>).mbFlipText(orientation);</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">				}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">					flapLabel.html(txt).css({whiteSpace<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>noWrap<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">				<span class="pl-k">if</span> (extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>extUrl<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">					extruder.setMbExtruderContent({</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">						url<span class="pl-k">:</span>extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>extUrl<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">						data<span class="pl-k">:</span>extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>extData<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">						<span class="pl-en">callback</span>: <span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">							<span class="pl-k">if</span> (extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>.onExtContentLoad) extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>.onExtContentLoad();</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">					})</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">				}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">					<span class="pl-s">var</span> container<span class="pl-k">=</span>$(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div&gt;<span class="pl-pds">&quot;</span></span>).addClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>).css({width<span class="pl-k">:</span>extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>.<span class="pl-sc">width</span><span class="pl-k">-</span><span class="pl-c1">20</span>, overflowY<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">					c.wrapInner(container);</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">					extruder.setExtruderVoicesAction();</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">				flap.on(<span class="pl-s1"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span>,<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">					<span class="pl-k">if</span> (<span class="pl-k">!</span>extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>isOpened<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">						extruder.openMbExtruder();</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">					}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">						extruder.closeMbExtruder();</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">						extruder.removeAttr(<span class="pl-s1"><span class="pl-pds">&quot;</span>isOpened<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">				}).on(<span class="pl-s1"><span class="pl-pds">&quot;</span>mouseenter<span class="pl-pds">&quot;</span></span>,<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">					<span class="pl-k">if</span>(extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>.autoOpenTime<span class="pl-k">&gt;</span><span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">						openTimer<span class="pl-k">=</span><span class="pl-s3">setTimeout</span>(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">							extruder.openMbExtruder();</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">							$(<span class="pl-s3">document</span>).one(<span class="pl-s1"><span class="pl-pds">&quot;</span>click.extruder<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>extruder.get(<span class="pl-c1">0</span>).idx,<span class="pl-st">function</span>(){extruder.closeMbExtruder();});</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">						},extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>.autoOpenTime);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">				}).on(<span class="pl-s1"><span class="pl-pds">&quot;</span>mouseleave<span class="pl-pds">&quot;</span></span>,<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">					<span class="pl-s3">clearTimeout</span>(openTimer);</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">				c.on(<span class="pl-s1"><span class="pl-pds">&quot;</span>mouseleave<span class="pl-pds">&quot;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>){</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">					<span class="pl-k">if</span>(extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>.closeOnExternalClick){</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">						<span class="pl-c">//Chrome bug: FORMELEMENT fire mouseleave event.</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">						<span class="pl-k">if</span>(<span class="pl-k">!</span>$(e.<span class="pl-sc">target</span>).parents().is(<span class="pl-s1"><span class="pl-pds">&quot;</span>.text<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>$(e.<span class="pl-sc">target</span>).is(<span class="pl-s1"><span class="pl-pds">&quot;</span>select<span class="pl-pds">&quot;</span></span>))</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">							$(<span class="pl-s3">document</span>).one(<span class="pl-s1"><span class="pl-pds">&quot;</span>click.extruder<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>extruder.get(<span class="pl-c1">0</span>).idx,<span class="pl-st">function</span>(){extruder.closeMbExtruder();});</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">					closeTimer<span class="pl-k">=</span><span class="pl-s3">setTimeout</span>(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">						<span class="pl-k">if</span>(extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>.autoCloseTime <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">							extruder.closeMbExtruder();</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">					},extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>.autoCloseTime);</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">				}).on(<span class="pl-s1"><span class="pl-pds">&quot;</span>mouseenter<span class="pl-pds">&quot;</span></span>, <span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">					<span class="pl-s3">clearTimeout</span>(closeTimer);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">					$(<span class="pl-s3">document</span>).off(<span class="pl-s1"><span class="pl-pds">&quot;</span>click.extruder<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>extruder.get(<span class="pl-c1">0</span>).idx);</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">				<span class="pl-k">if</span> (isVertical){</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">					c.css({ height<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">					<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.<span class="pl-sc">top</span><span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">						flap.css({top<span class="pl-k">:</span><span class="pl-c1">100</span><span class="pl-k">+</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span><span class="pl-s3">document</span>.extruder.<span class="pl-sc">left</span><span class="pl-k">:</span><span class="pl-s3">document</span>.extruder.<span class="pl-sc">right</span>)});</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">						<span class="pl-v">this</span>.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span><span class="pl-s3">document</span>.extruder.<span class="pl-sc">left</span><span class="pl-k">+=</span>labelH<span class="pl-k">+</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.flapMargin<span class="pl-k">:</span><span class="pl-s3">document</span>.extruder.<span class="pl-sc">right</span><span class="pl-k">+=</span> labelH<span class="pl-k">+</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.flapMargin;</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">					}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">						flap.css({top<span class="pl-k">:</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.<span class="pl-sc">top</span>});</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">					<span class="pl-s">var</span> clicDiv<span class="pl-k">=</span>$(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div/&gt;<span class="pl-pds">&quot;</span></span>).css({position<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>,top<span class="pl-k">:</span><span class="pl-c1">0</span>,left<span class="pl-k">:</span><span class="pl-c1">0</span>,width<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>,height<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>,background<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>transparent<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">					flap.append(clicDiv);</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">				<span class="pl-v">this</span>.originalWidth <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>;</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">				$(<span class="pl-s3">window</span>).on(<span class="pl-s1"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>,<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">					extruder.adjustSize();</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">				})</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">		<span class="pl-en">adjustSize</span>:<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">			<span class="pl-s">var</span> $extruder <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">			<span class="pl-s">var</span> extruder <span class="pl-k">=</span> $extruder.get(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">			<span class="pl-s">var</span> isHorizontal <span class="pl-k">=</span> extruder.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> extruder.<span class="pl-sc">options</span>.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>bottom<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">			<span class="pl-k">if</span>(isHorizontal){</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">				<span class="pl-k">if</span>( $(<span class="pl-s3">window</span>).<span class="pl-sc">width</span>() <span class="pl-k">&lt;</span> extruder.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>){</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">					$extruder.css({width<span class="pl-k">:</span>$(<span class="pl-s3">window</span>).<span class="pl-sc">width</span>(), marginLeft<span class="pl-k">:</span><span class="pl-c1">0</span>, left<span class="pl-k">:</span><span class="pl-c1">0</span>});</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">					$extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.ext_wrapper, .extruder-content, .extruder-container<span class="pl-pds">&quot;</span></span>).css({width<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">				}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">					$extruder.css({width<span class="pl-k">:</span>extruder.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>, left<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>50%<span class="pl-pds">&quot;</span></span>,marginLeft<span class="pl-k">:-</span>extruder.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>/<span class="pl-c1">2</span>});</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">					$extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.ext_wrapper, .extruder-content, .extruder-container<span class="pl-pds">&quot;</span></span>).css({width<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">			} <span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">				<span class="pl-k">if</span>( ($(<span class="pl-s3">window</span>).<span class="pl-sc">width</span>()<span class="pl-k">-</span><span class="pl-c1">80</span>) <span class="pl-k">&lt;</span> extruder.originalWidth){</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">					extruder.<span class="pl-sc">options</span>.<span class="pl-sc">width</span> <span class="pl-k">=</span> $(<span class="pl-s3">window</span>).<span class="pl-sc">width</span>()<span class="pl-k">-</span><span class="pl-c1">80</span>;</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">				}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">					extruder.<span class="pl-sc">options</span>.<span class="pl-sc">width</span> <span class="pl-k">=</span> extruder.originalWidth;</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">				<span class="pl-k">if</span>($extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>isOpened<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">					$extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.extruder-content<span class="pl-pds">&#39;</span></span>).css({width<span class="pl-k">:</span> extruder.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>});</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">					$extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.ext_wrapper, .extruder-content, .extruder-container<span class="pl-pds">&quot;</span></span>).css({width<span class="pl-k">:</span>extruder.<span class="pl-sc">options</span>.<span class="pl-sc">width</span>});</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">		<span class="pl-en">setMbExtruderContent</span>: <span class="pl-st">function</span>(<span class="pl-vpf">options</span>){</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">			<span class="pl-v">this</span>.<span class="pl-sc">options</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">				url<span class="pl-k">:</span><span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">				data<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">				<span class="pl-en">callback</span>:<span class="pl-st">function</span>(){}</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">			$.extend (<span class="pl-v">this</span>.<span class="pl-sc">options</span>, options);</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.url <span class="pl-k">||</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.url.<span class="pl-sc">length</span><span class="pl-k">==</span><span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">				<span class="pl-s3">alert</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>internal error: no URL to call<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">			<span class="pl-s">var</span> url<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.url;</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">			<span class="pl-s">var</span> data<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.<span class="pl-sc">data</span>;</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">			<span class="pl-s">var</span> where<span class="pl-k">=</span>$(<span class="pl-v">this</span>), voice;</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">			<span class="pl-s">var</span> cb<span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.callback;</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">			<span class="pl-s">var</span> container<span class="pl-k">=</span>$(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div&gt;<span class="pl-pds">&quot;</span></span>).addClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>extruder-container<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>($.browser.msie <span class="pl-k">&amp;&amp;</span> $.browser.<span class="pl-sc">version</span><span class="pl-k">&lt;=</span><span class="pl-c1">7</span>))</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">				container.css({width<span class="pl-k">:</span>$(<span class="pl-v">this</span>).get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>.<span class="pl-sc">width</span>});</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">			where.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.extruder-content<span class="pl-pds">&quot;</span></span>).wrapInner(container);</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">			$.ajax({</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">				type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">				url<span class="pl-k">:</span> url,</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">				data<span class="pl-k">:</span> data,</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">				async<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">				dataType<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>html<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">				<span class="pl-en">success</span>: <span class="pl-st">function</span>(<span class="pl-vpf">html</span>){</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">					where.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.extruder-container<span class="pl-pds">&quot;</span></span>).html(html);</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">					voice<span class="pl-k">=</span>where.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.voice<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">					voice.hover(<span class="pl-st">function</span>(){$(<span class="pl-v">this</span>).addClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>hover<span class="pl-pds">&quot;</span></span>);},<span class="pl-st">function</span>(){$(<span class="pl-v">this</span>).removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>hover<span class="pl-pds">&quot;</span></span>);});</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">					where.setExtruderVoicesAction();</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">					<span class="pl-k">if</span> (cb) {</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">						<span class="pl-s3">setTimeout</span>(<span class="pl-st">function</span>(){cb();},<span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">		<span class="pl-en">openMbExtruder</span>:<span class="pl-st">function</span>(<span class="pl-vpf">c</span>){</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">			<span class="pl-s">var</span> extruder<span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">			extruder.adjustSize();</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">			extruder.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>isOpened<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">			$(<span class="pl-s3">document</span>).off(<span class="pl-s1"><span class="pl-pds">&quot;</span>click.extruder<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>extruder.get(<span class="pl-c1">0</span>).idx);</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">			<span class="pl-s">var</span> opt<span class="pl-k">=</span> extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>;</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">			extruder.addClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>isOpened<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">			<span class="pl-k">if</span>(<span class="pl-k">!</span>isIE) extruder.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">			<span class="pl-s">var</span> position <span class="pl-k">=</span> opt.position;</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">			extruder.mb_bringToFront();</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">			<span class="pl-k">if</span> (position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>bottom<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">				extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.extruder-content<span class="pl-pds">&#39;</span></span>).slideDown( opt.slideTimer);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">				<span class="pl-k">if</span>(opt.onExtOpen) opt.onExtOpen();</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">			}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span>isIE) $(<span class="pl-v">this</span>).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">				extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.ext_wrapper<span class="pl-pds">&#39;</span></span>).css({width<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">				extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.extruder-content<span class="pl-pds">&#39;</span></span>).css({overflowX<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span>, display<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>block<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">				extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.extruder-content<span class="pl-pds">&#39;</span></span>).animate({ width<span class="pl-k">:</span> opt.<span class="pl-sc">width</span>}, opt.slideTimer,<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">					extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.extruder-container<span class="pl-pds">&quot;</span></span>).css({width<span class="pl-k">:</span> opt.<span class="pl-sc">width</span>});</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">				<span class="pl-k">if</span>(opt.onExtOpen) opt.onExtOpen();</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">			<span class="pl-k">if</span> (c) {</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">				<span class="pl-s3">setTimeout</span>(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">					$(<span class="pl-s3">document</span>).one(<span class="pl-s1"><span class="pl-pds">&quot;</span>click.extruder<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>extruder.get(<span class="pl-c1">0</span>).idx,<span class="pl-st">function</span>(){extruder.closeMbExtruder();});</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">				},<span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">		<span class="pl-en">closeMbExtruder</span>:<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">			<span class="pl-s">var</span> extruder<span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">			extruder.removeAttr(<span class="pl-s1"><span class="pl-pds">&quot;</span>isOpened<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">			<span class="pl-s">var</span> opt<span class="pl-k">=</span> extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>;</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">			extruder.removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>isOpened<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">			$(<span class="pl-s3">document</span>).off(<span class="pl-s1"><span class="pl-pds">&quot;</span>click.extruder<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>extruder.get(<span class="pl-c1">0</span>).idx);</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">			<span class="pl-k">if</span>(<span class="pl-k">!</span>isIE) extruder.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>,opt.extruderOpacity);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">			<span class="pl-k">if</span>(opt.hidePanelsOnClose) extruder.hidePanelsOnClose();</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">			<span class="pl-k">if</span> (opt.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> opt.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>bottom<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">				extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.extruder-content<span class="pl-pds">&#39;</span></span>).slideUp(opt.slideTimer);</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">				<span class="pl-k">if</span>(opt.onExtClose) opt.onExtClose();</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">			}<span class="pl-k">else</span> <span class="pl-k">if</span> (opt.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> opt.position<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>right<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">				extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.extruder-content<span class="pl-pds">&#39;</span></span>).css({overflow<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">				extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.extruder-content<span class="pl-pds">&#39;</span></span>).animate({ width<span class="pl-k">:</span> <span class="pl-c1">1</span> }, opt.slideTimer,<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">					extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.ext_wrapper<span class="pl-pds">&#39;</span></span>).css({width<span class="pl-k">:</span><span class="pl-c1">1</span>});</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">					extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.extruder-content<span class="pl-pds">&#39;</span></span>).css({overflow<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span>,display<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">					<span class="pl-k">if</span>(opt.onExtClose) opt.onExtClose();</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">	<span class="pl-s3">jQuery.fn</span>.<span class="pl-en">mb_bringToFront</span><span class="pl-k">=</span> <span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">		<span class="pl-s">var</span> zi<span class="pl-k">=</span><span class="pl-c1">10</span>;</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">		$(<span class="pl-s1"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>).each(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">			<span class="pl-k">if</span>($(<span class="pl-v">this</span>).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>position<span class="pl-pds">&quot;</span></span>)<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span>$(<span class="pl-v">this</span>).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>position<span class="pl-pds">&quot;</span></span>)<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>fixed<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">				<span class="pl-s">var</span> cur <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>($(<span class="pl-v">this</span>).css(<span class="pl-s1"><span class="pl-pds">&#39;</span>zIndex<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">				zi <span class="pl-k">=</span> cur <span class="pl-k">&gt;</span> zi <span class="pl-k">?</span> <span class="pl-s3">parseInt</span>($(<span class="pl-v">this</span>).css(<span class="pl-s1"><span class="pl-pds">&#39;</span>zIndex<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">:</span> zi;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">		$(<span class="pl-v">this</span>).css(<span class="pl-s1"><span class="pl-pds">&#39;</span>zIndex<span class="pl-pds">&#39;</span></span>,zi<span class="pl-k">+=</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">		<span class="pl-k">return</span> zi;</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">	<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line"><span class="pl-c">	 * EXTRUDER CONTENT</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">	<span class="pl-s3">$.fn</span>.<span class="pl-en">setExtruderVoicesAction</span><span class="pl-k">=</span><span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">		<span class="pl-s">var</span> extruder<span class="pl-k">=</span>$(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">		<span class="pl-s">var</span> opt<span class="pl-k">=</span>extruder.get(<span class="pl-c1">0</span>).<span class="pl-sc">options</span>;</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">		<span class="pl-s">var</span> voices<span class="pl-k">=</span> $(<span class="pl-v">this</span>).<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.voice<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">		voices.each(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">			<span class="pl-s">var</span> voice<span class="pl-k">=</span>$(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">			<span class="pl-k">if</span> ($.metadata){</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">				$.metadata.setType(<span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">				<span class="pl-k">if</span> (voice.metadata().panel) voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>panel<span class="pl-pds">&quot;</span></span>,voice.metadata().panel);</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">				<span class="pl-k">if</span> (voice.metadata().<span class="pl-sc">data</span>) voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span>,voice.metadata().<span class="pl-sc">data</span>);</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">				<span class="pl-k">if</span> (voice.metadata().<span class="pl-sc">disabled</span>) voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>setDisabled<span class="pl-pds">&quot;</span></span>, voice.metadata().<span class="pl-sc">disabled</span>);</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">			<span class="pl-k">if</span> (voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>setDisabled<span class="pl-pds">&quot;</span></span>))</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">				voice.disableExtruderVoice();</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">			<span class="pl-k">if</span> (voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>panel<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&amp;&amp;</span> voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>panel<span class="pl-pds">&quot;</span></span>)<span class="pl-k">!=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">				voice.append(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;span class=&#39;settingsBtn&#39;/&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">				voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.settingsBtn<span class="pl-pds">&quot;</span></span>).css({opacity<span class="pl-k">:</span>.<span class="pl-c1">5</span>});</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">				voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.settingsBtn<span class="pl-pds">&quot;</span></span>).hover(</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">						<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">							$(<span class="pl-v">this</span>).css({opacity<span class="pl-k">:</span><span class="pl-c1">1</span>});</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">						},</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">						<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">							$(<span class="pl-v">this</span>).not(<span class="pl-s1"><span class="pl-pds">&quot;</span>.sel<span class="pl-pds">&quot;</span></span>).css({opacity<span class="pl-k">:</span>.<span class="pl-c1">5</span>});</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">						}).<span class="pl-s3">click</span>(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">							<span class="pl-k">if</span> ($(<span class="pl-v">this</span>).parents().hasClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">								<span class="pl-k">if</span>(opt.accordionPanels)</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">									extruder.hidePanelsOnClose();</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">								<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">									$(<span class="pl-v">this</span>).closePanel();</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">								<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">							<span class="pl-k">if</span>(opt.accordionPanels){</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">								extruder.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.optionsPanel<span class="pl-pds">&quot;</span></span>).slideUp(<span class="pl-c1">400</span>,<span class="pl-st">function</span>(){$(<span class="pl-v">this</span>).<span class="pl-s3">remove</span>();});</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">								voices.removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">								voices.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.settingsBtn<span class="pl-pds">&quot;</span></span>).removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>).css({opacity<span class="pl-k">:</span>.<span class="pl-c1">5</span>});</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">							<span class="pl-s">var</span> content<span class="pl-k">=</span>$(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div class=&#39;optionsPanel&#39;&gt;&lt;/div&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">							voice.after(content);</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">							$.ajax({</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">								type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">								url<span class="pl-k">:</span> voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>panel<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">								data<span class="pl-k">:</span> voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">								async<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">								dataType<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>html<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">								<span class="pl-en">success</span>: <span class="pl-st">function</span>(<span class="pl-vpf">html</span>){</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">									<span class="pl-s">var</span> c<span class="pl-k">=</span> $(html);</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">									content.html(c);</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">									content.children().not(<span class="pl-s1"><span class="pl-pds">&quot;</span>.text<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">											.addClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>panelVoice<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">											.<span class="pl-s3">click</span>(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">												<span class="pl-k">if</span>(opt.closeOnClick)</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">													extruder.closeMbExtruder();</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">											});</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">									content.slideDown(<span class="pl-c1">400</span>);</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">							});</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">							voice.addClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">							voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.settingsBtn<span class="pl-pds">&quot;</span></span>).addClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>).css({opacity<span class="pl-k">:</span><span class="pl-c1">1</span>});</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">						});</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">			<span class="pl-k">if</span> (voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>a<span class="pl-pds">&quot;</span></span>).<span class="pl-sc">length</span><span class="pl-k">==</span><span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>panel<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">				voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.label<span class="pl-pds">&quot;</span></span>).not(<span class="pl-s1"><span class="pl-pds">&quot;</span>.disabled<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>cursor<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>pointer<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">					voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.settingsBtn<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>();</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">			<span class="pl-k">if</span> ((<span class="pl-k">!</span>voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>panel<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>panel<span class="pl-pds">&quot;</span></span>)<span class="pl-k">==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span> ) <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span>voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>setDisabled<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>setDisabled<span class="pl-pds">&quot;</span></span>)<span class="pl-k">!=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">				voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.label<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">					extruder.hidePanelsOnClose();</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">					<span class="pl-k">if</span>(opt.closeOnClick)</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">						extruder.closeMbExtruder();</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">	<span class="pl-s3">$.fn</span>.<span class="pl-en">disableExtruderVoice</span><span class="pl-k">=</span><span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">		<span class="pl-s">var</span> voice<span class="pl-k">=</span>$(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">		<span class="pl-s">var</span> label <span class="pl-k">=</span> voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.label<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">		voice.removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">		voice.<span class="pl-sc">next</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.optionsPanel<span class="pl-pds">&quot;</span></span>).slideUp(<span class="pl-c1">400</span>,<span class="pl-st">function</span>(){$(<span class="pl-v">this</span>).<span class="pl-s3">remove</span>();});</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">		voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>setDisabled<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">		label.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>,.<span class="pl-c1">4</span>);</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">		voice.hover(<span class="pl-st">function</span>(){$(<span class="pl-v">this</span>).removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>hover<span class="pl-pds">&quot;</span></span>);},<span class="pl-st">function</span>(){$(<span class="pl-v">this</span>).removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>hover<span class="pl-pds">&quot;</span></span>);});</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">		label.addClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>disabled<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>cursor<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>default<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">		voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.settingsBtn<span class="pl-pds">&quot;</span></span>).hide();</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">		voice.on(<span class="pl-s1"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span>,<span class="pl-st">function</span>(<span class="pl-vpf">event</span>){</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">			<span class="pl-s3">event</span>.stopPropagation();</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">	<span class="pl-s3">$.fn</span>.<span class="pl-en">enableExtruderVoice</span><span class="pl-k">=</span><span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">		<span class="pl-s">var</span> voice<span class="pl-k">=</span>$(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line">		voice.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>setDisabled<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line">		voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.label<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line">		voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.label<span class="pl-pds">&quot;</span></span>).removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>disabled<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>cursor<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>pointer<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line">		voice.off(<span class="pl-s1"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line">		voice.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.settingsBtn<span class="pl-pds">&quot;</span></span>).show();</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line">	<span class="pl-s3">$.fn</span>.<span class="pl-en">hidePanelsOnClose</span><span class="pl-k">=</span><span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line">		<span class="pl-s">var</span> voices<span class="pl-k">=</span> $(<span class="pl-v">this</span>).<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.voice<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line">		$(<span class="pl-v">this</span>).<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.optionsPanel<span class="pl-pds">&quot;</span></span>).slideUp(<span class="pl-c1">400</span>,<span class="pl-st">function</span>(){$(<span class="pl-v">this</span>).<span class="pl-s3">remove</span>();});</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line">		voices.removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line">		voices.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.settingsBtn<span class="pl-pds">&quot;</span></span>).removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>,.<span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">	<span class="pl-s3">$.fn</span>.<span class="pl-en">openPanel</span><span class="pl-k">=</span><span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">		<span class="pl-s">var</span> voice<span class="pl-k">=</span>$(<span class="pl-v">this</span>).hasClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>voice<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> $(<span class="pl-v">this</span>) <span class="pl-k">:</span> $(<span class="pl-v">this</span>).<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.voice<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">		voice.each(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">			<span class="pl-k">if</span>($(<span class="pl-v">this</span>).hasClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">			$(<span class="pl-v">this</span>).<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.settingsBtn<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>();</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">		})</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">	<span class="pl-s3">$.fn</span>.<span class="pl-en">closePanel</span><span class="pl-k">=</span><span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">		<span class="pl-s">var</span> voice<span class="pl-k">=</span>$(<span class="pl-v">this</span>).hasClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>voice<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> $(<span class="pl-v">this</span>) <span class="pl-k">:</span> $(<span class="pl-v">this</span>).<span class="pl-sc">parent</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.voice<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">		voice.<span class="pl-sc">next</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.optionsPanel<span class="pl-pds">&quot;</span></span>).slideUp(<span class="pl-c1">400</span>,<span class="pl-st">function</span>(){$(<span class="pl-v">this</span>).<span class="pl-s3">remove</span>();});</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">		voice.removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">		$(<span class="pl-v">this</span>).removeClass(<span class="pl-s1"><span class="pl-pds">&quot;</span>sel<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>,.<span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">	$.fn.buildMbExtruder<span class="pl-k">=</span>$.mbExtruder.buildMbExtruder;</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">	$.fn.setMbExtruderContent<span class="pl-k">=</span>$.mbExtruder.setMbExtruderContent;</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">	$.fn.closeMbExtruder<span class="pl-k">=</span>$.mbExtruder.closeMbExtruder;</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">	$.fn.openMbExtruder<span class="pl-k">=</span>$.mbExtruder.openMbExtruder;</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">	$.fn.adjustSize<span class="pl-k">=</span>$.mbExtruder.adjustSize;</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">})(jQuery);</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.09434s from github-fe116-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-996268c2962f947579cb9ec2908bd576591bc94b6a2db184a78e78815022ba2c.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-adfa2ee6f7ed872963ba72937fc628d615cd1cfe2268305014aaa3a80ef2b04d.js"></script>
      
      

  </body>
</html>


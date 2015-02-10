



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>jquery.mb.flipText/jquery.mb.flipText.js at master · pupunzi/jquery.mb.flipText</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="pupunzi/jquery.mb.flipText" name="twitter:title" /><meta content="jquery.mb.flipText - Vertical text on html context on jquery framework" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/56659?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/56659?v=3&amp;s=400" property="og:image" /><meta content="pupunzi/jquery.mb.flipText" property="og:title" /><meta content="https://github.com/pupunzi/jquery.mb.flipText" property="og:url" /><meta content="jquery.mb.flipText - Vertical text on html context on jquery framework" property="og:description" />

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

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="6AF3C5CB:2BEC:DC2B791:54D9B4E1" name="octolytics-dimension-request_id" /><meta content="6812085" name="octolytics-actor-id" /><meta content="procarrie" name="octolytics-actor-login" /><meta content="fef404aa654d04a08ad139450c69de0fe52e30b6cf8586fc5368a419b0468e7d" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="EkLfaZuoPjmtkeoOmB/i5QrYRjc6OHDOnbtm0BTeVdVOQnXIhKJoLDuPAULOVHvgxZPqrtXvDnwleOHVK+te+Q==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-ef721e11e3924bc9cc15ba51e2527ee4120e1b6712ba27ee293459c141139ad8.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-c4d064b72a3d62a75e227fddc0ac4eb74c198e45eca0cc0c231eabc1396885d2.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="0a6c7a0ed4a13150de6a78c16b91b081">

      
  <meta name="description" content="jquery.mb.flipText - Vertical text on html context on jquery framework">
  <meta name="go-import" content="github.com/pupunzi/jquery.mb.flipText git https://github.com/pupunzi/jquery.mb.flipText.git">

  <meta content="56659" name="octolytics-dimension-user_id" /><meta content="pupunzi" name="octolytics-dimension-user_login" /><meta content="559680" name="octolytics-dimension-repository_id" /><meta content="pupunzi/jquery.mb.flipText" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="559680" name="octolytics-dimension-repository_network_root_id" /><meta content="pupunzi/jquery.mb.flipText" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/pupunzi/jquery.mb.flipText/commits/master.atom" rel="alternate" title="Recent Commits to jquery.mb.flipText:master" type="application/atom+xml">

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
          <form accept-charset="UTF-8" action="/pupunzi/jquery.mb.flipText/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/pupunzi/jquery.mb.flipText/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
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
      <span title="pupunzi/jquery.mb.flipText">This repository</span>
    </li>
      <li>
        <a href="/pupunzi/jquery.mb.flipText/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
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
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qEGm0vy+CGkSHknoG60klSqI2qX17EDTJX/Ui39orED0DJow5QZplfiilMam6PnFXjQ1clV6/WVsJFh3+b/hDQ==" /></div>
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
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="dk2dPm59jtTzm297ytQzA1lzKFTNHfPglsphZIVItTrgqlgKisnw+PQUleXxOWUejkXiQfVz+x765n/IVHxQRw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="559680" />

      <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/pupunzi/jquery.mb.flipText/watchers">
          1
        </a>
        <a href="/pupunzi/jquery.mb.flipText/subscription"
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

    <form accept-charset="UTF-8" action="/pupunzi/jquery.mb.flipText/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1VVV9LVQE742PV3m6GkQk3Tk/0LjPJapIn539erPyo31P2GiMzT/YqnIbSgepYU5kd3bjV40ZwzZtvTKekNQwA==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar pupunzi/jquery.mb.flipText">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/pupunzi/jquery.mb.flipText/stargazers">
          7
        </a>
</form>
    <form accept-charset="UTF-8" action="/pupunzi/jquery.mb.flipText/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="zzGsWZ5wNhkaaAczyuh77U9KEkCIksqPRX+gkypXexbOFU6K57EkuS9spuq2zYv8rsbaCI/ZG6ED2NPEqh2emw==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star pupunzi/jquery.mb.flipText">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/pupunzi/jquery.mb.flipText/stargazers">
          7
        </a>
</form>  </div>

  </li>

        <li>
          <a href="/pupunzi/jquery.mb.flipText/fork" class="minibutton with-count js-toggler-target tooltipped-n" title="Fork your own copy of pupunzi/jquery.mb.flipText to your account" aria-label="Fork your own copy of pupunzi/jquery.mb.flipText to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/pupunzi/jquery.mb.flipText/network" class="social-count">1</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/pupunzi" class="url fn" itemprop="url" rel="author"><span itemprop="title">pupunzi</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/pupunzi/jquery.mb.flipText" class="js-current-repository" data-pjax="#js-repo-pjax-container">jquery.mb.flipText</a></strong>

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
     data-issue-count-url="/pupunzi/jquery.mb.flipText/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/pupunzi/jquery.mb.flipText" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /pupunzi/jquery.mb.flipText">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/pupunzi/jquery.mb.flipText/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /pupunzi/jquery.mb.flipText/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/pupunzi/jquery.mb.flipText/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /pupunzi/jquery.mb.flipText/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/pupunzi/jquery.mb.flipText/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /pupunzi/jquery.mb.flipText/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/pupunzi/jquery.mb.flipText/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /pupunzi/jquery.mb.flipText/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/pupunzi/jquery.mb.flipText/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /pupunzi/jquery.mb.flipText/graphs">
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
           value="https://github.com/pupunzi/jquery.mb.flipText.git" readonly="readonly">
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
           value="git@github.com:pupunzi/jquery.mb.flipText.git" readonly="readonly">
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
           value="https://github.com/pupunzi/jquery.mb.flipText" readonly="readonly">
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


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save pupunzi/jquery.mb.flipText to your computer and use it in GitHub Desktop." aria-label="Save pupunzi/jquery.mb.flipText to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/pupunzi/jquery.mb.flipText/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of pupunzi/jquery.mb.flipText as a zip file"
                   title="Download the contents of pupunzi/jquery.mb.flipText as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/pupunzi/jquery.mb.flipText/blob/4919448df7d08bbb9e7c4bc83432b519a68d1990/inc/jquery.mb.flipText.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:58c3c02bf48681d8889c52c37ad4fa3e -->

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
              <a href="/pupunzi/jquery.mb.flipText/blob/master/inc/jquery.mb.flipText.js"
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
              <a href="/pupunzi/jquery.mb.flipText/tree/1.1/inc/jquery.mb.flipText.js"
                 data-name="1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1">1.1</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/pupunzi/jquery.mb.flipText/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pupunzi/jquery.mb.flipText" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.mb.flipText</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pupunzi/jquery.mb.flipText/tree/master/inc" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">inc</span></a></span><span class="separator">/</span><strong class="final-path">jquery.mb.flipText.js</strong>
  </div>
</div>

<include-fragment class="commit commit-loader file-history-tease" src="/pupunzi/jquery.mb.flipText/contributors/master/inc/jquery.mb.flipText.js">
  <div class="file-history-tease-header">
    Fetching contributors&hellip;
  </div>

  <div class="participation">
    <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-EAF2F5-0bdc57d34b85c4a4de9d0d1db10cd70e8a95f33ff4f46c5a8c48b4bf4e5a9abe.gif" width="16" /></p>
    <p class="loader-error">Cannot retrieve contributors at this time</p>
  </div>
</include-fragment>
<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>106 lines (96 sloc)</span>
          <span class="meta-divider"></span>
        <span>4.937 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/pupunzi/jquery.mb.flipText/raw/master/inc/jquery.mb.flipText.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/pupunzi/jquery.mb.flipText/blame/master/inc/jquery.mb.flipText.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/pupunzi/jquery.mb.flipText/commits/master/inc/jquery.mb.flipText.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/pupunzi/jquery.mb.flipText/edit/master/inc/jquery.mb.flipText.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/pupunzi/jquery.mb.flipText/delete/master/inc/jquery.mb.flipText.js"
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
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*******************************************************************************</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> jquery.mb.components</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> Copyright (c) 2001-2011. Matteo Bicocchi (Pupunzi); Open lab srl, Firenze - Italy</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> email: mbicocchi@open-lab.com</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> site: http://pupunzi.com</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c"> Licences: MIT, GPL</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c"> http://www.opensource.org/licenses/mit-license.php</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c"> http://www.gnu.org/licenses/gpl.html</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c"> ******************************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="pl-c"> * jQuery.mb.components: jquery.mb.flipV</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="pl-c"> * version: 1.1</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="pl-c"> * © 2001 - 2011 Matteo Bicocchi (pupunzi), Open Lab</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">(<span class="pl-st">function</span>(<span class="pl-vpf">$</span>) {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">  <span class="pl-s">var</span> isIE<span class="pl-k">=</span>$.browser.msie;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">  <span class="pl-s3">jQuery.fn</span>.<span class="pl-en">encHTML</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.each(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">      <span class="pl-s">var</span> me   <span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">      <span class="pl-s">var</span> html <span class="pl-k">=</span> me.<span class="pl-sc">text</span>();</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">      <span class="pl-c">//      me.text(html.replace(/&amp;/g,&#39;&amp;amp;&#39;).replace(/&lt;/g,&#39;&amp;lt;&#39;).replace(/&gt;/g,&#39;&amp;gt;&#39;).replace(/&#39;/g, escape(&quot;&#39;&quot;)).replace(/&quot;/g,escape(&#39;&quot;&#39;)));</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">      me.<span class="pl-sc">text</span>(html.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&amp;<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span>&amp;amp;<span class="pl-pds">&#39;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&lt;<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span>&amp;lt;<span class="pl-pds">&#39;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&gt;<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span>&amp;gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&#39;<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>’<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&quot;<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>“<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">  $.mbflipText<span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">    author<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Matteo Bicocchi<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">    version<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>1.1<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">    <span class="pl-en">flipText</span>:<span class="pl-st">function</span>(<span class="pl-vpf">tb</span>, <span class="pl-vpf">dir</span>){</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>dir) dir<span class="pl-k">=</span><span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">      <span class="pl-s">var</span> UTF8encoded<span class="pl-k">=</span>$(<span class="pl-s1"><span class="pl-pds">&quot;</span>meta[http-equiv=Content-Type]<span class="pl-pds">&quot;</span></span>).attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>content<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&amp;&amp;</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>meta[http-equiv=Content-Type]<span class="pl-pds">&quot;</span></span>).attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>content<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>utf-8<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&gt;-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>.each(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">        <span class="pl-s">var</span> el<span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">        <span class="pl-s">var</span> h<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">        <span class="pl-s">var</span> w<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">        <span class="pl-k">if</span>(<span class="pl-k">!</span>isIE) el.encHTML();</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">        <span class="pl-s">var</span> txt<span class="pl-k">=</span> el.html();</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">        <span class="pl-s">var</span> label<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">        <span class="pl-s">var</span> bgcol<span class="pl-k">=</span>(el.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>background-color<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&amp;&amp;</span> el.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>background-color<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>rgba(0, 0, 0, 0)<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> el.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>background-color<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>#fff<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">        <span class="pl-s">var</span> fontsize<span class="pl-k">=</span> <span class="pl-s3">parseInt</span>(el.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span>))<span class="pl-k">&gt;</span><span class="pl-c1">0</span><span class="pl-k">?</span><span class="pl-s3">parseInt</span>(el.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span>))<span class="pl-k">:</span><span class="pl-c1">14</span>;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">        <span class="pl-s">var</span> fontfamily<span class="pl-k">=</span>el.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>font-family<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span>el.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>font-family<span class="pl-pds">&#39;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\&#39;</span><span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&quot;<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Arial<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">        <span class="pl-s">var</span> fontcolor<span class="pl-k">=</span>el.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>color<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span> el.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>color<span class="pl-pds">&#39;</span></span>)<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>#000<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">        <span class="pl-k">if</span> ($.browser.msie){</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">          <span class="pl-k">if</span>(<span class="pl-k">!</span>tb) el.css({<span class="pl-s1"><span class="pl-pds">&#39;</span>writing-mode<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>tb-rl<span class="pl-pds">&#39;</span></span>, height<span class="pl-k">:</span>h, filter<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fliph() flipv(&quot;&quot;) <span class="pl-pds">&#39;</span></span>, whiteSpace<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>nowrap<span class="pl-pds">&quot;</span></span>}).css(<span class="pl-s1"><span class="pl-pds">&#39;</span>font-weight<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>normal<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">          label<span class="pl-k">=</span>$(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;span style=&#39;writing-mode: tb-rl; whiteSpace:nowrap; height:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>h<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>; width:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>w<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>txt<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/span&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">        }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">          h<span class="pl-k">=</span>el.getFlipTextDim(<span class="pl-c1">true</span>)[<span class="pl-c1">1</span>]<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">          w<span class="pl-k">=</span>el.getFlipTextDim(<span class="pl-c1">true</span>)[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">          <span class="pl-s">var</span> rot<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>-90<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">          <span class="pl-s">var</span> ta<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>end<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">          <span class="pl-s">var</span> xFix<span class="pl-k">=</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">          <span class="pl-s">var</span> textDir<span class="pl-k">=</span> dir<span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>writing-mode:rl;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">          textDir<span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>; <span class="pl-c">//todo RL direction</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">          <span class="pl-s">var</span> yFix<span class="pl-k">=</span>$.browser.opera <span class="pl-k">?</span> <span class="pl-s3">parseInt</span>(w)<span class="pl-k">-</span>(<span class="pl-s3">parseInt</span>(w)/<span class="pl-c1">4</span>)<span class="pl-k">:</span> $.browser.safari<span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">:</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">          <span class="pl-k">if</span> (tb){</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">            yFix<span class="pl-k">=</span>$.browser.opera<span class="pl-k">?</span><span class="pl-c1">20</span><span class="pl-k">:</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">            xFix<span class="pl-k">=</span> $.browser.safari<span class="pl-k">?</span>(fontsize/<span class="pl-c1">4</span>)<span class="pl-k">:</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">            xFix<span class="pl-k">=</span> dir<span class="pl-k">?</span> xFix<span class="pl-k">-</span><span class="pl-c1">20</span><span class="pl-k">:</span>xFix;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">            rot<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>90, <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>((<span class="pl-s3">parseInt</span>(w)/<span class="pl-c1">2</span>)<span class="pl-k">-</span>xFix)<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-s3">parseInt</span>(w)/<span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">            ta<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>start<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">          <span class="pl-s">var</span> <span class="pl-s3">onClick</span><span class="pl-k">=</span> el.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>onclick<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> el.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>href<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">          <span class="pl-s">var</span> clickScript<span class="pl-k">=</span> <span class="pl-s3">onClick</span><span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div class=&#39;pointer&#39; style=&#39;position:absolute;top:0;left:0;width:100%;height:100%;background:transparent&#39;/&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">          label<span class="pl-k">=</span>$(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;object class=&#39;flip_label&#39; style=&#39;height:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>h<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>; width:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>w<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>;&#39; type=&#39;image/svg+xml&#39; data=&#39;data:image/svg+xml; charset=utf-8 ,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">                  <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;svg xmlns=<span class="pl-cce">\&quot;</span>http://www.w3.org/2000/svg<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">                  <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;rect x=<span class="pl-cce">\&quot;</span>0<span class="pl-cce">\&quot;</span> y=<span class="pl-cce">\&quot;</span>0<span class="pl-cce">\&quot;</span> width=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>w<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> height=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>h<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> fill=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>bgcol<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> stroke=<span class="pl-cce">\&quot;</span>none<span class="pl-cce">\&quot;</span>/&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">                  <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;text  x=<span class="pl-cce">\&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>xFix<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> y=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>yFix<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> font-family=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>fontfamily<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>  fill=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>fontcolor<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> font-size=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>fontsize<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>  style=<span class="pl-cce">\&quot;</span>text-anchor: <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>ta<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>; <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>textDir<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">                  <span class="pl-s1"><span class="pl-pds">&quot;</span>dominant-baseline: hanging<span class="pl-cce">\&quot;</span> transform=<span class="pl-cce">\&quot;</span>rotate(<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>rot<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>)<span class="pl-cce">\&quot;</span> text-rendering=<span class="pl-cce">\&quot;</span>optimizeSpeed<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>txt<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/text&gt;&lt;/svg&gt;&#39;&gt;&lt;/object&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">                  clickScript <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">                  <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">        <span class="pl-s">var</span> wrapper<span class="pl-k">=</span> <span class="pl-s3">onClick</span> <span class="pl-k">?</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div/&gt;<span class="pl-pds">&quot;</span></span>).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>position<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>relative<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">        <span class="pl-s">var</span> cssPos<span class="pl-k">=</span> el.wrap(wrapper).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>position<span class="pl-pds">&quot;</span></span>)<span class="pl-k">!=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> el.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>position<span class="pl-pds">&quot;</span></span>)<span class="pl-k">!=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>fixed<span class="pl-pds">&quot;</span></span>  <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>relative<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> el.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>position<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">        <span class="pl-c">//var cssPos= el.css(&quot;position&quot;)!=&quot;absolute&quot; || el.css(&quot;position&quot;)!=&quot;fixed&quot;  ?&quot;relative&quot; : el.css(&quot;position&quot;);</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">        el.html(label).css({position<span class="pl-k">:</span>cssPos, width<span class="pl-k">:</span>w});</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">    <span class="pl-en">getFlipTextDim</span>:<span class="pl-st">function</span>(<span class="pl-vpf">enc</span>){</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">      <span class="pl-s">var</span> el<span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">      <span class="pl-k">if</span>(<span class="pl-k">!</span>enc <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>isIE) el.encHTML();</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">      <span class="pl-s">var</span> txt<span class="pl-k">=</span> el.html();</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">      <span class="pl-s">var</span> fontsize<span class="pl-k">=</span> <span class="pl-s3">parseInt</span>(el.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">      <span class="pl-s">var</span> fontfamily<span class="pl-k">=</span>el.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>font-family<span class="pl-pds">&#39;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&#39;<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&quot;<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">      <span class="pl-k">if</span> (fontfamily<span class="pl-k">==</span><span class="pl-c1">undefined</span>) fontfamily<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Arial<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">      <span class="pl-s">var</span> placeHolder<span class="pl-k">=</span>$(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;span/&gt;<span class="pl-pds">&quot;</span></span>).css({position<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>,top<span class="pl-k">:-</span><span class="pl-c1">100</span>, whiteSpace<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>noWrap<span class="pl-pds">&quot;</span></span>, fontSize<span class="pl-k">:</span>fontsize, fontFamily<span class="pl-k">:</span> fontfamily});</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">      placeHolder.html(txt);</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">      $(<span class="pl-s1"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>).append(placeHolder);</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">      <span class="pl-s">var</span> h <span class="pl-k">=</span> (placeHolder.<span class="pl-sc">outerWidth</span>()<span class="pl-k">!=</span><span class="pl-c1">0</span><span class="pl-k">?</span>placeHolder.<span class="pl-sc">outerWidth</span>()<span class="pl-k">:</span>(<span class="pl-c1">16</span><span class="pl-k">+</span>txt.<span class="pl-sc">length</span><span class="pl-k">*</span>fontsize<span class="pl-k">*</span>.<span class="pl-c1">60</span>));</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">      <span class="pl-s">var</span> w <span class="pl-k">=</span> (placeHolder.<span class="pl-sc">outerHeight</span>()<span class="pl-k">!=</span><span class="pl-c1">0</span><span class="pl-k">?</span>placeHolder.<span class="pl-sc">outerHeight</span>()<span class="pl-k">+</span><span class="pl-c1">5</span><span class="pl-k">:</span><span class="pl-c1">50</span>);</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">      placeHolder.<span class="pl-s3">remove</span>();</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">      <span class="pl-k">return</span> [w,h];</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">  $.fn.mbFlipText<span class="pl-k">=</span>$.mbflipText.flipText;</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">  $.fn.getFlipTextDim<span class="pl-k">=</span>$.mbflipText.getFlipTextDim;</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">})(jQuery);</td>
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
      <li>&copy; 2015 <span title="0.06824s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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


<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import Home from "../views/Home.svelte";
    import MobileNavToogle from "./MobileNavToogle.svelte";
  
    let isColoredDark: boolean = true;
    let navClass: string = 'nav-dark';
    let isMobileNavOpen: boolean = false;

    function toogleMobileNav() {
        isMobileNavOpen = !isMobileNavOpen;
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            toogleMobileNav();
        }
    };

    window.addEventListener('scroll', () => {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (scrollTop < (50 * viewportHeight) / 100) {
            isColoredDark = true;
            navClass = "nav-dark";
        } else {
            isColoredDark = false;
            navClass = "nav-light";
        }
    });
</script>

<Router>
    <nav class={navClass}>
        <Link to="/" style="text-decoration: none;">
            <div class="logo">Lucas Faget</div>  
        </Link>

        <div on:click={toogleMobileNav} on:keydown={handleKeyDown}>
            <MobileNavToogle isColoredDark={!isColoredDark} isMobileNavOpen={isMobileNavOpen} />
        </div>
        
        <ul aria-expanded={isMobileNavOpen}>
            <Link to="/" style="height: 100%; text-decoration: none"><li>Home</li></Link>
            <Link to="/" style="height: 100%; text-decoration: none"><li>Home</li></Link>
            <Link to="/" style="height: 100%; text-decoration: none"><li>Home</li></Link>
        </ul>
    </nav>
    <div>
        <Route path="/"><Home /></Route>
        <Route path="/"><Home /></Route>
        <Route path="/"><Home /></Route>
        <!-- <Route path="/" component="{Home}" /> -->
    </div>
</Router>
  
<style>
    nav {
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        padding-inline: 30px;
        box-sizing: border-box;
        z-index: 100;
    }

    .nav-dark {
        background-color: #000;
        position: absolute;
        height: 100px;
    }

    .nav-light {
        background-color: #fff;
        position: fixed;
        height: 60px;
        padding-inline: 30px;
        animation: slideDown 0.5s forwards;
    }

    nav ul {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .nav-dark ul {
        background-color: #000;
    }

    .nav-light ul {
        background-color: #fff;
    }

    nav ul li {
        display: flex;
        align-items: center;
        height: 100%;
        border-radius: 20px 0 20px 0;
        font-size: 20px;
        cursor: pointer;
    }

    .nav-dark ul li {
        color: #fff;
    }

    .nav-light ul li {
        color: #000;
    }

    .nav-dark ul li:hover {
        color: #000;
        background-color: #fff;
    }

    .nav-light ul li:hover {
        color: #fff;
        background-color: #000;
    }
    
    .logo {
        color: #fff;
        position: relative;
        font-size: 25px;
        font-family: 'Anton', sans-serif;
        z-index: 1000;
    }

    .nav-light .logo {
        color: #000;
    }

    @keyframes slideDown {
        0% {
            top: -50%;
        }
        100% {
            top: 0;
        }
    }

    @media only screen and (min-width: 601px)
    {
        nav ul {
            gap: 15px;
            height: 100%;
        }

        nav ul li {
            padding-inline: 20px;
        }
    }

    @media only screen and (max-width: 600px)
    {
        nav ul[aria-expanded="true"] {
            top: 0;
        }

        nav ul[aria-expanded="false"] {
            top: -100vh;
        }

        nav ul {
            position: absolute;
            top: 0;
            left: 0;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            transition: top 0.5s ease-in-out;
            z-index: 10;
        }

        .nav-dark ul {
            margin-top: 100px;
        }

        .nav-light ul {
            margin-top: 60px;
        }

        nav ul li {
            padding-inline: 50px;
            padding-block: 20px;
        }
    }
</style>
  
<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import MobileNavToggle from "./MobileNavToggle.svelte";
    import Home from "../views/Home.svelte";
    import Projects from "../views/Projects.svelte";
    import CV from "../views/CV.svelte";
    import Contact from "../views/Contact.svelte";
    import CustomButton from "./CustomButton.svelte";
  
    const maxMobileNavViewportWidth: number = 800;
    let viewportHeight: number = window.innerHeight || document.documentElement.clientHeight;
    let viewportWidth: number = window.innerWidth || document.documentElement.clientWidth;
    let scrollTop: number = document.documentElement.scrollTop;
    let isMobileNavOpen: boolean = false;

    window.addEventListener('resize', () => {
        viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    });

    window.addEventListener('scroll', () => {
        scrollTop = document.documentElement.scrollTop;
    });

    $: hasScrolled = scrollTop < (50 * viewportHeight) / 100;

    $: isWideNav = hasScrolled && !isMobileNavVisible;

    $: isDarkNav = isWideNav;

    $: isMobileNavVisible = isMobileNavOpen && viewportWidth <= maxMobileNavViewportWidth;

    $: logoSrc = isDarkNav ? "/logo/logo-light-removebg.png" : "/logo/logo-dark-removebg.png";
  
    function toggleMobileNav() {
        isMobileNavOpen = !isMobileNavOpen;
    }
  
    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter" || event.key === " ") {
            toggleMobileNav();
        }
    }

    function changePage() {
        isMobileNavOpen = false;
    }
</script>

<Router>
    <nav class={isDarkNav ? 'nav-dark ' : 'nav-light '}{isWideNav ? 'nav-wide' : 'nav-thin'}>
        <Link to="/" style="text-decoration: none; height: 100%; display: flex; align-items: center;">
            <img src={logoSrc} class="logo" alt="logo" />
        </Link>

        <div on:click={toggleMobileNav} on:keydown={handleKeyDown}>
            <MobileNavToggle isColoredDark={!isDarkNav} isMobileNavOpen={isMobileNavOpen} />
        </div>
        
        <ul aria-expanded={isMobileNavOpen}>
            <Link to="/projects" on:click={changePage} style={hasScrolled || isMobileNavVisible ? "text-decoration: none;" : "text-decoration: none; height: 100%;"}>
                {#if isDarkNav}
                    <CustomButton text="Projects" isRounded={true} />
                {:else}
                    <li>Projects</li>
                {/if}
            </Link>
            <Link to="/cv" on:click={changePage} style={hasScrolled || isMobileNavVisible ? "text-decoration: none;" : "text-decoration: none; height: 100%;"}>
                {#if isDarkNav}
                    <CustomButton text="CV" isRounded={true} />
                {:else}
                    <li>CV</li>
                {/if}
            </Link>
            <Link to="/contact" on:click={changePage} style={hasScrolled || isMobileNavVisible ? "text-decoration: none;" : "text-decoration: none; height: 100%;"}>
                {#if isDarkNav}
                    <CustomButton text="Contact" isRounded={true} />
                {:else}
                    <li>Contact</li>
                {/if}
            </Link>
        </ul>
    </nav>
    <div>
        <Route path="/" component="{Home}" />
        <Route path="/projects" component="{Projects}" />
        <Route path="/cv" component="{CV}" />
        <Route path="/contact" component="{Contact}" />
    </div>
</Router>
  
<style>
    nav {
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: max(500px, 100%);
        padding-inline: 30px;
        box-sizing: border-box;
        z-index: 100;
    }

    .nav-dark {
        background-color: var(--color-dark) transparent;
    }

    .nav-light {
        background-color: var(--color-light);
    }

    .nav-wide {
        position: absolute;
        height: 100px;
    }

    .nav-thin {
        position: fixed;
        height: 60px;
        padding-inline: 30px;
    }

    nav ul {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    nav ul li {
        display: flex;
        align-items: center;
        border-radius: 20px 0 20px 0;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        cursor: pointer;
    }

    .nav-dark ul li {
        color: var(--color-light);
    }

    .nav-light ul li {
        color: var(--color-dark);
    }

    .nav-thin.nav-dark ul li:hover {
        color: var(--color-dark);
    }
    
    .logo {
        position: relative;
        height: 50%;
        z-index: 1000;
    }

    @keyframes slideDown {
        0% {
            top: -50%;
        }
        100% {
            top: 0;
        }
    }

    @media only screen and (min-width: 801px)
    {
        nav ul {
            gap: 15px;
            height: 100%;
        }

        nav ul li {
            height: 100%;
            padding-inline: 20px;
        }

        .nav-thin.nav-dark ul li:hover {
            background-color: var(--color-light);
        }

        .nav-thin.nav-light ul li:hover {
            background-color: var(--color-dark);
        }

        .nav-thin.nav-light ul li:hover {
            color: var(--color-light);
        }

        .nav-thin {
            animation: slideDown 0.5s forwards;
        }
    }

    @media only screen and (max-width: 800px)
    {
        nav ul[aria-expanded="true"] {
            top: 0;
        }

        nav ul[aria-expanded="false"] {
            top: -100%;
        }

        nav ul {
            position: fixed;
            left: 0;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            height: 100%;
            width: 100%;
            z-index: 10;
        }

        .nav-dark ul, .nav-light ul {
            background-color: var(--color-light);
        }

        nav ul li {
            padding-inline: 50px;
            padding-block: 5px;
            font-size: 40px;
            text-transform: uppercase;
            font-family: 'Anton', sans-serif;
        }

        .nav-thin.nav-light ul li:hover {
            color: var(--color-gray);
        }
    }
</style>

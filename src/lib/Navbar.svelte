<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import Home from "../views/Home.svelte";
  
    export let url: string = "";
    
    let navClass = 'nav-dark';

    window.addEventListener('scroll', () => {
        var nav = document.querySelector('nav');
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        navClass = (scrollTop < (50 * viewportHeight) / 100) ? 'nav-dark' : 'nav-light';
    });
</script>

<Router url="{url}">
    <nav class={navClass}>
        <Link to="/" style="text-decoration: none;">
            <div class="logo">Lucas Faget</div>  
        </Link>
        <ul class="menu">
            <Link to="/" style="text-decoration: none; height: 100%"><li>Home</li></Link>
            <Link to="/" style="text-decoration: none; height: 100%"><li>Home</li></Link>
            <Link to="/" style="text-decoration: none; height: 100%"><li>Home</li></Link>
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
    .link {
        text-decoration: none;
        height: 100%;
    }

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
        position: absolute;
        height: 100px;
        background-color: #000;
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
        gap: 15px;
        height: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    nav ul li {
        display: flex;
        align-items: center;
        height: 100%;
        padding-inline: 20px;
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
        font-size: 25px;
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
</style>
  
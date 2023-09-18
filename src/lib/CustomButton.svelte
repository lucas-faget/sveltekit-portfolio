<style>
    .button {
        background-color: hsl(0, 0%, 20%);
        color: #fff;
        position: relative;
        overflow: hidden;
        border: none;
        border-radius: 25px;
        padding: 12px 25px;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        cursor: pointer;
        z-index: 1;
    }

    .text {
        position: relative;
        z-index: 2;
        transition: color 0.5s ease;
    }

    .fill {
        background-color: #fff;
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        border-radius: 25px;
        transition: left 0.5s ease;
    }

    .button:hover .fill {
        left: 0;
    }

    .button:hover .text {
        color: #000;
    }
</style>

<div class="button">
    <div class="fill"></div>
    <span class="text">Download</span>
</div>

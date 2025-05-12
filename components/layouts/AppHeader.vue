<script setup>
    import resumeEN from '@/assets/images/Paradon Padjuntuk-EN.pdf';
    import resumeTH from '@/assets/images/Paradon Padjuntuk-TH.pdf';
</script>

<template>
    <section>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand">My Portfolio</a>
                <button
                    class="navbar-toggler custom-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
                    <li class="nav-item">
                        <a class="nav-link hover-underline-animation" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Resume
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" style="color: #18498e;" :href="resumeTH" target="_blank">Resume TH</a></li>
                            <li><a class="dropdown-item" style="color: #18498e;" :href="resumeEN" target="_blank">Resume EN</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link hover-underline-animation" href="#project">Project</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link hover-underline-animation" href="#contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </section>
</template>

<style scoped>
    .navbar {
        background: linear-gradient(to right, #18498e, rgb(8, 34, 67));
        position: fixed;
        width: 100%;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 12px 80px;
        z-index: 998;
        border-bottom: 1px solid #18498e;
        backdrop-filter: blur(15px);
    }

    .navbar a {
        text-decoration: none;
        color: #EFF0F2;
        transition: color 0.3s ease;
        position: relative;
    }

    .navbar a:hover {
        color: #EFF0F2;
    }

    .navbar ul {
        padding-left: 16px;
        font-size: 16px;
    }

    ul.dropdown-menu {
        padding: 16px;
    }
    a.dropdown-item {
        padding: 8px;
    }
    a.dropdown-item:hover {
        transition: all 0.3s ease-in-out;
        padding-left: 16px !important;
        border-radius: 6px;
        background-color: #07387d !important;
        color: #f9c234 !important;
    }

    .nav-item {
        width: fit-content;
    }

    .hover-underline-animation::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #f9c234;
        transform-origin: center;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover::after {
        transform: scaleX(1);
    }

    .custom-toggler.navbar-toggler {
        border: none;
        border-color: none;
    }

    .custom-toggler .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    }


    .custom-toggler.navbar-toggler {
        border: none;
        border-color: none;
    }

    .custom-toggler {
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
        padding: 0;
    }

    @media(max-width: 992px) {
        .navbar {
            padding: 12px 24px;
        }
    }
</style>
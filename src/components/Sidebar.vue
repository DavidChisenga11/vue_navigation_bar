<template>
    <div class="app">
        <!-- Toggle Button -->
        <button class="toggle-btn" @click="toggleSidebar">
            ☰
        </button>

        <!-- Sidebar -->
        <div :class="['sidebar', { 'sidebar-closed': !isSidebarOpen }]">
            <ul>

                <li><router-link to="/">Home</router-link></li>
                <!-- <li><a href="#">About</a></li> -->
            <li>  <router-link to="/about">About</router-link></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <!-- Main Content -->
        <div class="content">
            <h1>Welcome to My App</h1>
            <p>This is the main content area.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSidebarOpen: false // Controls whether the sidebar is open
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        }
    }
};
</script>



<style scoped>
.app {
    /* display: flex; */
}

/* Sidebar Styles */
.sidebar {
    width: 250px;
    height: 100vh;
    background-color: #333;
    color: white;
    padding: 15px;
    position: fixed;
    transition: width 0.3s ease;
}

.sidebar-closed {
    width: 60px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    margin: 15px 0;
}

.sidebar ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

.sidebar ul li a:hover {
    text-decoration: underline;
}

/* Toggle Button Styles */
.toggle-btn {
    /* position: fixed; */
    top: 15px;
    left: 15px;
    background-color: #444;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    z-index: 1000;
}

.toggle-btn:hover {
    background-color: #555;
}

/* Main Content Styles */
.content {
    margin-left: 250px;
    padding: 20px;
    width: calc(100% - 250px);
    transition: margin-left 0.3s ease, width 0.3s ease;
}

.sidebar-closed+.content {
    margin-left: 60px;
    width: calc(100% - 60px);
}
</style>

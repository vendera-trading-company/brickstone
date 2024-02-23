<script setup lang="ts">
defineProps({
    open: { type: Boolean }
});

</script>
<script lang="ts">
export default {
    updated() {
        if (this.open) {
            this.openSideBar();
        } else {
            this.closeSideBar();
        }
    },
    methods:
    {
        handleResize: function () {
            if (this.open) {
                this.openSideBar();
            } else {
                this.closeSideBar();
            }
        },
        openSideBar: function () {
            const width = window.innerWidth;

            const sidebar = document.getElementById("sidebar");

            const content = document.getElementById("content");

            const header = document.getElementById("header");

            const footer = document.getElementById("footer");

            const appbar = document.getElementById("appbar");

            if (sidebar && content) {
                if (width < 1024) {
                    content.style.display = 'none';
                } else {
                    content.style.display = '';
                    content.style.paddingLeft = sidebar.clientWidth + "px";
                }
            }

            if (sidebar && header) {
                if (width < 1024) {
                    header.style.display = 'none';
                } else {
                    header.style.display = '';
                    header.style.paddingLeft = sidebar.clientWidth + "px";
                }
            }

            if (sidebar && footer) {
                if (width < 1024) {
                    footer.style.display = 'none';
                } else {
                    footer.style.display = '';
                    footer.style.paddingLeft = sidebar.clientWidth + "px";
                }
            }

            if (sidebar && appbar) {
                if (width < 1024) {
                    appbar.style.display = 'none';
                } else {
                    appbar.style.display = '';
                    appbar.style.left = sidebar.clientWidth + "px";
                }
            }

            if (sidebar) {
                const elements = document.getElementsByClassName("left-safe");

                for (var i = 0; i < elements.length; i++) {
                    const element = elements[i] as HTMLElement;
                    if (element) {
                        if (width < 1024) {
                            element.style.display = 'none';
                        } else {
                            element.style.display = '';
                            element.style.paddingLeft = sidebar.clientWidth + "px";
                        }
                    }
                }
            }
        },
        closeSideBar: function () {
            const width = window.innerWidth;

            const sidebar = document.getElementById("sidebar");

            const content = document.getElementById("content");

            const header = document.getElementById("header");

            const footer = document.getElementById("footer");

            const appbar = document.getElementById("appbar");

            if (sidebar && content) {
                if (width < 1024) {
                    content.style.display = '';
                } else {
                    content.style.display = '';
                    content.style.paddingLeft = '';
                }
            }

            if (sidebar && header) {
                if (width < 1024) {
                    header.style.display = '';
                } else {
                    header.style.display = '';
                    header.style.paddingLeft = '';
                }
            }

            if (sidebar && footer) {
                if (width < 1024) {
                    footer.style.display = '';
                } else {
                    footer.style.display = '';
                    footer.style.paddingLeft = '';
                }
            }

            if (sidebar && appbar) {
                if (width < 1024) {
                    appbar.style.display = '';
                } else {
                    appbar.style.display = '';
                    appbar.style.left = '';
                }
            }

            if (sidebar) {
                const elements = document.getElementsByClassName("left-safe");

                for (var i = 0; i < elements.length; i++) {
                    const element = elements[i] as HTMLElement;
                    if (element) {
                        if (width < 1024) {
                            element.style.display = '';
                        } else {
                            element.style.display = '';
                            element.style.paddingLeft = '';
                        }
                    }
                }
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)

        if (this.open) {
            this.openSideBar();
        } else {
            this.closeSideBar();
        }
    },
}
</script>
<template>
    <div id="sidebar" v-bind:class="{
        'fixed left-0 top-0 bottom-0 flex flex-col bg-background w-full p-4 justify-between lg:max-w-xs right-0 lg:right-auto': open,
        'hidden fixed left-0 top-0 bottom-0 flex-col bg-background w-full p-4 justify-between lg:max-w-xs right-0 lg:right-auto': !open
    }">
        <slot name="leading" />
        <slot />
    </div>
</template>
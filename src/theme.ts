import { reactive } from 'vue';

enum Theme {
    DARK = "dark",
    LIGHT = "light"
  };

const theme = reactive({
    state: Theme.DARK
});

export { Theme, theme };
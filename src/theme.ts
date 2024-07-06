import { reactive } from 'vue';

enum Theme {
    DARK = "dark",
    LIGHT = "light"
  };

export const theme = reactive({
    state: Theme.DARK
});
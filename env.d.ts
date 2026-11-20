/// <reference types="vite/client" />

declare module '@jamescoyle/vue-icon' {
  import { DefineComponent } from 'vue';
  
  const SvgIcon: DefineComponent<{
    type?: string;
    path: string;
    size?: number | string;
    viewbox?: string;
    flip?: 'horizontal' | 'vertical' | 'both';
    rotate?: number | string;
  }>;
  
  export default SvgIcon;
}
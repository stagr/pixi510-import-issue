// declare a json module to be able to import json files
declare module "*.json" {
    const value: any;
    export default value;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.svg'

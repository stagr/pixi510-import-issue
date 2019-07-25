import * as PIXI from 'pixi.js-legacy';
import { LoaderResource } from '@pixi/loaders';
import sound from 'pixi-sound';

// Note how the LoaderResource accessed through PIXI namespace is different from the one imported directly.
console.log("PIXI.LoaderResource['_xhrTypeMap']", PIXI.LoaderResource['_xhrTypeMap']);
console.log("LoaderResource['_xhrTypeMap']", LoaderResource['_xhrTypeMap']);

// On the first access to sound the LoaderResource is modified but not PIXI.LoaderResource. Just access some property of sound.
console.log("sound.useLegacy: " + sound.useLegacy);


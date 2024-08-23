import "core-js/es/map";
import "core-js/es/set";
import "core-js/es/promise";
import "core-js/es/array";
import "core-js/es/string";
import "core-js/es/number";
import "core-js/es/object";
import "core-js/es/symbol";
import "core-js/es/function";
import "raf/polyfill";
import "url-polyfill";
import "focus-options-polyfill";
import "unfetch/polyfill";
import "abortcontroller-polyfill";
import "allsettled-polyfill";
import "intersection-observer";

import { render, Config, hexColor } from "@lightningjs/solid";
import { HashRouter, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import App from "./pages/App";
import Browse from "./pages/Browse";
import NotFound from "./pages/NotFound";
import coreExtensionModuleUrl from "./AppCoreExtensions.js?importChunkUrl";

const Grid = lazy(() => import("./pages/Grid"));
const Portal = lazy(() => import("./pages/Portal"));
const TextPage = lazy(() => import("./pages/Text"));
const CreatePage = lazy(() => import("./pages/Create"));
const ViewportPage = lazy(() => import("./pages/Viewport"));
const ButtonsPage = lazy(() => import("./pages/Buttons"));
const FlexPage = lazy(() => import("./pages/Flex"));
const FlexSizePage = lazy(() => import("./pages/FlexSize"));
const FlexColumnSizePage = lazy(() => import("./pages/FlexColumnSize"));
const FlexColumnPage = lazy(() => import("./pages/FlexColumn"));
const ButtonsMaterialPage = lazy(() => import("./pages/ButtonsMaterial"));
const SuperFlexPage = lazy(() => import("./pages/SuperFlex"));
const Entity = lazy(() => import("./pages/Entity"));
const People = lazy(() => import("./pages/People"));

const logFps = true;
Config.debug = false;
Config.animationsEnabled = true;
Config.fontSettings.fontFamily = "Ubuntu";
Config.fontSettings.color = hexColor("#f6f6f6");
Config.fontSettings.fontSize = 32;
Config.rendererOptions = {
    coreExtensionModule: coreExtensionModuleUrl,
    fpsUpdateInterval: logFps ? 200 : 0,
    enableInspector: true,
    // Set the resolution based on window height
    // 720p = 0.666667, 1080p = 1, 1440p = 1.5, 2160p = 2
    deviceLogicalPixelRatio: window.innerHeight / 1080,
};

render(() => (
    <HashRouter root={(props) => <App {...props} />}>
        <Route path="" component={Browse} />
        <Route path="examples" component={Portal} />
        <Route path="browse/:filter" component={Browse} />
        <Route path="grid" component={Grid} />
        <Route path="text" component={TextPage} />
        <Route path="buttons" component={ButtonsPage} />
        <Route path="flex" component={FlexPage} />
        <Route path="create" component={CreatePage} />
        <Route path="viewport" component={ViewportPage} />
        <Route path="flexsize" component={FlexSizePage} />
        <Route path="flexcolumnsize" component={FlexColumnSizePage} />
        <Route path="flexcolumn" component={FlexColumnPage} />
        <Route path="superflex" component={SuperFlexPage} />
        <Route path="buttonsmaterial" component={ButtonsMaterialPage} />
        <Route path="entity/people/:id" component={People} />
        <Route path="entity/:type/:id" component={Entity} />
        <Route path="*all" component={NotFound} />
    </HashRouter>
));

import { webPageURL } from "./global_variables.mjs";

const anchorTags = document.getElementsByTagName("a");

[...anchorTags].forEach((anchorTag) => {
    anchorTag.href = webPageURL;
});

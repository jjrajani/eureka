import Bowser from "bowser";
const parser = Bowser.getParser(window.navigator.userAgent);

const isMobile = () => parser.getPlatform().type === "mobile";

export default isMobile;

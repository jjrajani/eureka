const isNodeEnv = (env) => {
  return process.env.NODE_ENV === env;
};

export default isNodeEnv;

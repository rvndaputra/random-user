const useEmitter = () => {
  return {
    emit: (type: string, detail?: any) => {
      const event = new CustomEvent(type, { detail });
      window.dispatchEvent(event);
    },
    on: (type: string, handler: any) => window.addEventListener(type, handler),
    off: (type: string, handler: any) =>
      window.removeEventListener(type, handler),
  };
};

export default useEmitter;

export interface IStuff {
  first: any;
  second: any;
}

export default function doSomething(): IStuff {
  return { first: 1, second: 3 };
}

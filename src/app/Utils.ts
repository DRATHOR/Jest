export type StringCaseType = {
  lowerCase: string;
  upperCase: string;
  length: number;
  characters: Array<string>;
  extra: object;
};

export function checkAllStringCaseAndChar(arg: string): StringCaseType {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    length: arg.length,
    characters: Array.from(arg),
    extra: {},
  };
}

export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export class StringUtils{
    public toUpperCase(arg:string){
        if(!arg){
            throw new Error('Invalid argument!')
        }
        return arg.toUpperCase();
    }
  }

 


export type Media = {
  asset:{
    _ref:string;
    _type:string;
  }
  _key:string;
  _type:string
}

export type ProjectMedia = Media & {
  isHero:boolean;
}
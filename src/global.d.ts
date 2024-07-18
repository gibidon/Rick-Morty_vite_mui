declare module '*.jpg'
declare module '*.mp3'
declare module '*.svg'
declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

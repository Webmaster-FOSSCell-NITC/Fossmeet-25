# Foss Meet 2025
This repository contains the code to foss meet 2025 landing site

## Links
- [main host]()
- [staging host]()
- [figma file]()
- [notion file]()

## Developer guidelines
The following guidelines are to be followed to ensure uniform coding standards amongst all team members
- tailwind integration has been pre setup
- use either tailwind or module.css 
- don't edit globals.css
- CI/CD is configured for github pages host at updation of main branch
- associate every major branch with a github-issue
- every branch should be named &lt;issueNo&gt;-&lt;details&gt;
    - eg: a branch for creating navbar would be navbar-1
- follow naming schemes and folder structure as per [Directory Structure](#directory-structure)
- use google fonts wherever possible else refer fonts folder for available fonts



## Handling Mobile View
The configured media query constants for tailwind are given below. Even when use modular css, don't make use of any other media query values except the ones below.
```js
xs: '480px',  // Custom breakpoint for extra small screens
sm: '600px',  // Change the default sm size
md: '800px',  // Change the default md size
lg: '1080px', // Change the default lg size
xl: '1440px', // Change the default xl size
2xl: '1920px', // Change the default 2xl size
```


## Directory Structure
```plaintext
Fossmeet-25/
├── public/                         # for static files (e.g. images/pdfs/json etc)                     
|   ├── general/
|   ├── egComponent/
|   ├── docs/
|   ├── json/
└───src/
    ├── fonts/
    |   ├── *.woff|.tff|.otf
    |   └── index.ts                # refer examples for instructions
    ├── app/
    |   ├── example-route/
    |   |   └── page.tsx            # refer examples for instructions
    |   └── (debug)/                # do any tests here, ignored by git
    |       ├── test1/
    |       |   └── page.tsx
    |       └── test2/
    |           └── page.tsx
    ├── components/
    │   └── EgComponent/            # refer examples for instructions
    |       ├── childComponent.tsx  # (optional) 
    │       ├── index.tsx           # main component
    │       └── styles.module.css   # (optional)
    ├── hooks/
    |   └── useHook.ts              # any custom hooks needed
    ├── lib/                        # (redundant) any REST calls
    └── types.ts                    # (optional) any type that might be reused in multiple pages, add here
```
 
## Important GIT commands

### Start working on a separate branch
- It is recommended to work on a separate branch to avoid conflicts with other contributors
- Every task that will be assigned will be added to the [github issues page](https://github.com/FOSSCellNITCalicut/Fossmeet-25/issues)
- The issue is also `assigned` to the person who will be responsible for that page / part of the page.
- follow the steps to start working on the branch
```bash
git fetch
git pull
git checkout 1-home-page
```

### While working
- do `git pull` before you start any coding session, in case someone else has made any important changes in your branch
- after every coding session, do:
```bash
git add .
git commit -m "<short sentence on what changes you have done>"
git push
```

### Once code is ready to be merged
- ensure that `git push` has been ran 
- create a pull request from github via [this page](https://github.com/FOSSCellNITCalicut/Fossmeet-25/pulls)
- make the pull request from `<your-branch>` --> `main`
- assign someone as a reviewer
- DO NOT: merge at this stage


## Examples

### Routes
- use lowercase letters with dashes
```tsx
filePath: 'src/app/example-route/page.tsx'

'use client' // add directive for client-side rendering
import EgComponent from '@/components/EgComponent';
import Container from '@/components/Container';
const Page = () => {

    const buttonHandler = useCallback(() => {
        // wrap every function within useCallback
    }, [/* dependencies */]);

    const dummyData = useMemo(() => {
        // wrap every constant value within useMemo
    }, [/* dependencies */]);

    return (
        <Container>
            <EgComponent 
                {...props}
            />
        </Container>
    )
}

export default Page;
```

### Components
```tsx
filePath: 'src/components/EgComponent/index.tsx'

import styles from './styles.module.css';
/**
* write brief description about component
* @param prop1 [number] give info
* @param prop2 [string] give info
* @author you
*/
const EgComponent = ({ // name this same as the folder
    prop1,
    prop2,
    ...
} : {
    prop1: number,
    prop2: string,
    ...
}) => {
    return (
        <div className="flex flex-col"> // tailwind css
            <div className={styles['your-classname']}> // modular css
                hello
            </div>
        </div>
    )
};

export default EgComponent;
```

## Authors
- B21s
    - [Diljith P D](https://github.com/th3bossc/)
    - [Mayank Gupta](https://github.com/71203mayank)
- B22s
    - 
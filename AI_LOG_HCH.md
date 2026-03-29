# AI USAGE LOG

By Helene C. Halvorsen


## Entry 1:
- 
- Tool: Claude
- Date: 2. january 
- Purpose: Understanding Typescript, typesafety, React Components with javascript vs typescript, passing props in React
- Outcome: Better understanding of typesafety, typescript functions vs javascript functions, deper understanding of typechecking during development, void vs any returns. Visual example, with/without destructuring, 
- Links and references: React handbook, MDN returnstatements, MDN typescript handbook functions


## Entry 2:
-
- Tool: Claude 
- Date: 23 February - 29 March (project timeline)
- Purpose: Exploring project structures, better understanding of libraries, react, wcag, create summary of project requirements
- Outcome: Explain and examplyfy different project structures like component structure vs feature-based structure, how to structure projects, Typescript type vs interface declaration, understanding native HTML vs Zod schema validation library, custom hook, useState, useEffect, Zod rule declaration, security points with cliten-side validation and server-side validation, explaining deprecated messages, understanding accessability improvements - aria usage, handling events, better understand react-router-dom, promises vs safePromises, typescript generics, create prinatble summary of project brief and requirement, Tanstack vs Zustand
- Links and references: Zod docs, MDN-aria describedby, React docs, React Context, useContext docs, Zustand docs, Typescipt docs, MDN aria 

## Entry 3:
-
- Tool Github Copilot
- Date: 16 March - 29 March
- purpose: getting help writing better project descriptions
- Outcome: activating Github Copilot, use it to generate PR descriptions, testing using Copilot as an additional PR reviewer.


## Entry 4: 
-
- Tool: Copilot vsCode
- Date: 23 February - 29 March (project timeline)
- Purpose: Correct git commmands, CI/CD, help with git and terminal navigation
- Outcome: find correct git command for handling PR changes remotely vs locally, revert changes back and forth, check git configuration, set upstream branches correctly, check upstream points, how to force certain changes through if simultanly making changes both remotely and locally and then forgetting to pull before push etc to make sure I use correct commands and understand what they do before I run the commands.

Example: 
- explain npm ci
- ## `npm ci` — Clean Install

`npm ci` installs your project's dependencies **exactly** as specified in your `package-lock.json` file — no more, no less.

### How it differs from `npm install`

| | `npm install` | `npm ci` |
|---|---|---|
| Reads from | `package.json` (loose) | `package-lock.json` (exact) |
| Updates lock file | Yes, if needed | Never |
| Deletes `node_modules` first | No | Yes, always |
| Speed | Slower | Faster |
| Best for | Development | CI/CD pipelines, production builds |

### Why the name?

**CI** stands for **Continuous Integration** — automated systems that build and test your code (like GitHub Actions). These environments need *reproducible, predictable* installs, which is exactly what `npm ci` guarantees.

### When to use it

Use `npm ci` when:
- You're deploying to production
- You're running automated tests
- You want to guarantee everyone on a team gets the *exact same* dependencies
- You're setting up a fresh environment and don't want surprises

Use `npm install` when:
- You're actively developing and adding/updating packages

### The key rule

`npm ci` will **throw an error** if your `package.json` and `package-lock.json` are out of sync — which is actually a feature, not a bug. It forces you to keep them consistent.

---

**📖 Learn more:** [npm docs — `npm ci`](https://docs.npmjs.com/cli/v10/commands/npm-ci)


--- 

# Reflection on AI use
I use AI (and Google search) as a tool to help explain the big picture with mental models,ask questions directly about small and big issues receiving detailed explanations and follow ups. I discuss core concepts,"rubber ducking",to get an overview over different techs their pros/con on why one would consider using one over the other, then I decide what aligns with my vision. There's a sea of information and I use tools available to make my learning direction consistent and clear.

I ask questions about trade offs, newer vs older ways of writing code, links to the official docs on topics discussed,how to begin understand messages received when debugging errors. I ask for guidance when stuck and in need of support, I test ideas for solutions,I tweak,test and evaluate suggested solutions to fit my needs in the current project. I use AI to help write good PR descriptions inside GitHub. I've tested using Copilot to help review PR's after reading the code and pulling in the changes myself locally, I evaluate the feedback received from AI tools like Claude and Copilot and provide appropriate official docs and my thinking to the conversations to help stay consistent on my learning journey. 

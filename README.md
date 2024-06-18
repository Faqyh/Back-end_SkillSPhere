# SkillSphere Back-End

## Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository.

```bash
git clone https://github.com/Faqyh/Back-end_SkillSPhere.git
```

Then, install dependencies and fetch data to your local machine. **Note that we use NPM**

```bash
cd Back-end_SkillSPhere
npm install
```

Finally, run the development.

```bash
npm run start
```

---

## How To Use It
Run the project then open [POSTMAN](https://www.postman.com/)
**Base Url** :  `http://localhost:3000`

| Endpoint | Usage | Method |
|----------|-------|----------|
| `/trainings` | Add Training |  POST  |
| `/trainings` | Get Training |  GET   |
| `/trainings/:id` | get a specific training by ID |  GET   |
| `/organizers` | Get Organizers |  GET   |
| `/organizers` | Add Organizers |  Post   |
| `/users` | Get users |  GET   |
| `/users` | Add users |  Post   |
| `/users/:id` | get a specific user by ID |  GET   |
| `/users/:id/favorite` | add a favorite training to a user |  POST   |

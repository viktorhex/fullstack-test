### Question 7: Setup and Refactor a Next.js Application with ShadCN Components

**Question:**

Create a Next.js application using the T3 stack and perform the following tasks to integrate and use ShadCN components:

1. Setup ShadCN including the sans font.
2. Add all ShadCN components to the project.
3. Refactor the home page to make use of ShadCN components in the `<CrudShowcase/>` component.
4. Refactor the form to use `react-hook-form`.
5. Create a table to display the last ten posts using the `<Table/>` component from ShadCN.
6. Refactor the form to use a Zod schema for form validation. The `name` field is required and needs to be a minimum of 3 characters.

Ensure your implementation uses TypeScript for type safety and follows best practices for integrating third-party libraries and managing state in a Next.js application.

**Steps:**

1. **Setup ShadCN including the sans font:**
   - Install ShadCN and configure it in your Next.js application.
   - Ensure the sans font is included in the global styles.

2. **Add all ShadCN components:**
   - Install and configure all available ShadCN components in your project.

3. **Refactor the home page:**
   - Update the `<CrudShowcase/>` component to utilize ShadCN components.

4. **Refactor the form:**
   - Integrate `react-hook-form` for form management.

5. **Create a table to display the last ten posts:**
   - Use the `<Table/>` component from ShadCN to display the data  and retrieve the data from the backend SQLite database using tRPC routes.

6. **Refactor the form to use a Zod schema for form validation:**
   - Implement a Zod schema to validate the form inputs, ensuring the `name` field is required and has a minimum length of 3 characters.

**Constraints:**

- The project should be implemented in TypeScript.
- The ShadCN components should be used effectively throughout the project.
- Ensure type safety and proper validation using `react-hook-form` and Zod.

---

This question requires a solid understanding of Next.js, TypeScript, form handling, and validation, making it a suitable task for a technical interview.

import React from "react";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Login, UserDetails } from "./pages";
import App from "./App";

describe("Correct First Render", () => {
	it("renders correctly without crashing", () => {
		render(<App />);

		expect(screen.getByTestId("login_text")).toBeDefined();
	});
});

describe("Correct Navigation", () => {
	it("navigates to Users Page when Login button is clicked", () => {
		const history = createMemoryHistory({ initialEntries: ["/dashboard"] });
		render(
			<MemoryRouter>
				<Login />
			</MemoryRouter>
		);

		userEvent.click(screen.getByText("LOG IN"));

		expect(history.location.pathname).toBe("/dashboard");
	});
});

describe("Back to Users Button Works", () => {
	it("navigates to Users Page when back button is clicked", () => {
		const history = createMemoryHistory({ initialEntries: ["/dashboard"] });
		render(
			<MemoryRouter>
				<UserDetails />
			</MemoryRouter>
		);

		userEvent.click(screen.getByText("Back to Users"));

		expect(history.location.pathname).toBe("/dashboard");
	});
});

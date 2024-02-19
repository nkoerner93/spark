import React from "react";
import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("RegisterForm", () => {
  it("renders form fields", () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm your password")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  // Add more test cases here...
});

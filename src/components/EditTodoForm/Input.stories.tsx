import { Meta, StoryObj } from "@storybook/react"
import { Input } from "../Input"

export default {
  title: "Components/EditTodoForm/Input",
  component: Input
} as Meta

export const Default: StoryObj = {
  args: {
    primary: true,
    label: "Input"
  }
}

export const Active: StoryObj = {
  args: {
    primary: true,
    label: "Active"
  }
}

export const Hover: StoryObj = {
  args: {
    hover: true,
    label: "Hover"
  }
}

// Active
// Hover
// Disabled

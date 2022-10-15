import { ComponentStory, Story } from '@storybook/react';
import React from 'react'
import Accordian, { AccordianProps } from "./accordian";

export default {
    title: "Components/Accordian",
    component: Accordian
}

const Template: Story<AccordianProps> = (args) => <Accordian {...args} />;

export const Default = Template.bind({});
Default.args = {
    header: "Header 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestiae deserunt totam odit recusandae mollitia sit a, accusantium esse quis alias, nulla voluptatibus! Eius hic, perferendis iure mollitia accusamus itaque."
}
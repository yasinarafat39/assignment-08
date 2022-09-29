
import React from 'react';

const Blog = () => {
    return (
        <div className='pt-12'>
            <h1 className='font-semibold text-4 text-2xl'>Blog..</h1>

            <div>
                <p className='text-lg font-semibold mt-8'>1. How does React work?</p>
                <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. <br /> <br />
                    ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <p className='text-lg font-semibold mt-8'>2. What is the difference between Props and State?</p>
                <p>Props are known as properties it can be used to pass data from one components to another component. Props cannot be modified, read-only, and Immutable. <br /> <br />
                    The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and it is local to the component only.
                </p>
            </div>
            <div className='mb-12'>
                <p className='text-lg font-semibold mt-8'>3. Basically what is the purpose of useState without data loading?</p>
                <p>The useState() is a Hook that allows you to have state variable in functional components. So basically useState is the ability to encapsulate local state in a functional component.
                </p>
            </div>


        </div>
    );
};

export default Blog;
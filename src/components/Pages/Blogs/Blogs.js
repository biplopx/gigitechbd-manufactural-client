import React from 'react';
import PageTitle from '../../Shared/PageTitle';

const Blogs = () => {
  return (
    <>
      <PageTitle title="Blogs"></PageTitle>
      <section className='py-12 p-5'>
        <h2 className='text-3xl font-bold text-center mb-5'>Blog</h2>
        <div className='flex flex-col items-center'>
          <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded mb-4'>
            <h3 className='text-2xl font-semibold mb-3'>1. How will you improve the performance of a React Application?</h3>
            <p>There are many techniques to increase the performance of a reactive web application. If you follow all these techniques or tips to create React application, you will get much better performance. The names of the techniques are summarized below.</p>
            <ul className='list-disc p-5'>
              <li>Try to Keeping component state local where necessary.</li>
              <li>Don't render unnesscessary components</li>
              <li>Use code splitting techniques in react using dynamic import()</li>
              <li>Optimize Images</li>
              <li>Use Lazy load image system</li>
              <li>For state management use redux or other state management libary/framework</li>
              <li>Avoid Inline Function Definition in the Render Function.</li>
              <li>Avoid using Index as Key for map</li>
              <li>Avoiding Props in Initial States</li>
              <li>Spreading props on DOM elements etc</li>
            </ul>
            <p>There is few techniques name to improve performance of React Application</p>
          </div>
          <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded mb-4'>
            <h3 className='text-2xl font-semibold mb-3'>2. What are the different ways to manage a state in a React application?</h3>
            <p>In React Application Four different way to manage react application state.</p>
            <h4>Type of state in React</h4>
            <ul className="list-decimal p-5">
              <li>Local state</li>
              <li>Global state</li>
              <li>Server state</li>
              <li>URL state</li>
            </ul>
            <p>Other way we can manage react state using useState() hooks, useEffect(). You can also manage state using React Context API. Also we can use third party state managment tool like Redux or Redux ToolKit.</p>
          </div>
          <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded mb-4'>
            <h3 className='text-2xl font-semibold mb-3'>3. How does prototypical inheritance work?</h3>
            <p>The prototypical inheritance is a ES6 Javascript feature  used to add methods and properties in objects. It is a method to inherit an object or method proties to another object. Nowadays, in modern javascript language, it is being set using __proto__. Examples: ChildObject.__proto__ = ParentObject. suppose you have an object students and we another object as present book. in this presentBook object we can inherit object value to child object or method</p>
          </div>
          <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded mb-4'>
            <h3 className='text-2xl font-semibold mb-3'>4.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem earum, quis ullam numquam facilis provident dicta voluptatum dolore sed ipsam ipsa, alias culpa cumque nisi porro tempore harum enim dignissimos? Accusantium quod reiciendis veritatis enim, commodi dicta excepturi, placeat nostrum iusto incidunt esse aut maiores quis dolorum eaque aperiam cum hic, debitis voluptatem impedit. Placeat eum temporibus doloremque expedita, consequuntur repellat aliquam numquam accusamus sunt tenetur ipsum ab molestias, repudiandae veritatis vero odio? Eligendi odio iusto sunt aliquam, dolorum possimus ipsa. Libero consequatur tempore recusandae distinctio aperiam quasi omnis veniam fugiat nulla? Asperiores sed necessitatibus est enim natus ullam!</p>
          </div>
          <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded mb-4'>
            <h3 className='text-2xl font-semibold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem earum, quis ullam numquam facilis provident dicta voluptatum dolore sed ipsam ipsa, alias culpa cumque nisi porro tempore harum enim dignissimos? Accusantium quod reiciendis veritatis enim, commodi dicta excepturi, placeat nostrum iusto incidunt esse aut maiores quis dolorum eaque aperiam cum hic, debitis voluptatem impedit. Placeat eum temporibus doloremque expedita, consequuntur repellat aliquam numquam accusamus sunt tenetur ipsum ab molestias, repudiandae veritatis vero odio? Eligendi odio iusto sunt aliquam, dolorum possimus ipsa. Libero consequatur tempore recusandae distinctio aperiam quasi omnis veniam fugiat nulla? Asperiores sed necessitatibus est enim natus ullam!</p>
          </div>
          <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded'>
            <h3 className='text-2xl font-semibold'>6. What is a unit test? Why should write unit tests?</h3>
            <p>In computer programming lanaguage unit testing is a software source code testing method for finding code bugs and testing perfomance of application/software.It's mean Unit testing is testing the some smallest code of an application. It is done during to coding phase by developers.</p>
            <p>You should write unit testing code to check our application perfomance, find bugs. Identitfy all bugs to slove easyli.</p>
            <ul className="list-disc p-5">
              <li>Unit test helps in finding application bugs early</li>
              <li>Unit testing makes the team in the long run</li>
              <li>Unit testing makes debugging an error easier</li>
              <li>Unit testing can be automated</li>
              <li>Unit testing descrease the total testing cost</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
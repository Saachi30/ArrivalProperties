import React from 'react'
import './Form.css'
const Form = () => {
//https://formsubmit.co/el/havuzi
    return (
        <div style={{border: "2px solid grey", boxShadow:"1px 1px 10px gray"}}>
            <form action="https://formspree.io/f/mnqelwkr" method="POST">
                <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input name='name' class="form-control" id="exampleFormControlInput1" placeholder="Enter full name"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Phone</label>
                    <input name='phone'  class="form-control" id="exampleFormControlInput1" placeholder="Enter contact number"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email</label>
                    <input name='email' type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email address"/>
                </div>
               
                <div class="form-group">
                    <label for="exampleFormControlTextarea1" style={{fontWeight:"500"}}></label>Send us a message
                    <textarea name='text' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn ">Submit</button>
            </form>
        </div>
    )
}

export default Form

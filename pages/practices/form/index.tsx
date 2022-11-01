import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../../../styles/Form.module.css";

const Form = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        title: "",
        comment: ""
    });

    async function handleFormUpdate(event:ChangeEvent<HTMLInputElement>) {
        setFormData(data=>({...data, ...{[event.target.id]:event.target.value}}));
    }

    async function handleSubmitForm(event:MouseEvent) {
        
        // prevent default
        event.preventDefault();

        // if all contents are filled, submit form
        if(formData.name !== "" && formData.title !== "" && formData.comment !== "") {

            // router to success page with form data
            router.push({
                pathname: '/practices/form/success',
                query: { name: formData.name, title: formData.title, comment: formData.comment }
            });

        }
        

    }

    return (

        <div className={styles.container}>
            <h1>Form</h1>
            <form className={styles.form}>
                <input type="text" placeholder="Name" id="name" value={formData.name} onChange={(e)=>handleFormUpdate(e)} />
                <input type="text" placeholder="Title" id="title" value={formData.title} onChange={(e)=>handleFormUpdate(e)} />
                <input type="text" placeholder="Comment" id="comment" value={formData.comment} onChange={(e)=>handleFormUpdate(e)} />
                <button type="submit" onClick={handleSubmitForm}>Submit</button>
            </form>
        </div>

    );

}

export default Form;
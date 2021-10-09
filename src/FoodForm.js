import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const FoodForm = ({onChange, handleSubmit, formData}) =>(
    <Card>
        <CardBody className="text-center">
            <CardTitle>
                <h3>New Item</h3>
            </CardTitle>
            <form onSubmit={handleSubmit}>
                <div>
                    <label 
                        className="mr-3" 
                        htmlFor="type">
                        Type:
                    </label>
                    <select name="type" onChange={onChange}>
                        <option value="snack">Snack</option>
                        <option value="drink">Drink</option>
                    </select>
                </div>
                <div>
                    <label 
                        className="mr-3" 
                        htmlFor="name">
                        Name:
                    </label>
                    <input 
                        name="name" 
                        value={formData.name} 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label 
                        className="mr-3" 
                        htmlFor="description">
                            Description:
                    </label>
                    <input 
                        name="description" 
                        value={formData.description}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label 
                        className="mr-3" 
                        htmlFor="recipe">
                            Recipe:
                    </label>
                    <input 
                        name="recipe" 
                        value={formData.recipe} 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label 
                        className="mr-3" 
                        htmlFor="serve">
                            Serve:
                    </label>
                    <input 
                        name="serve" 
                        value={formData.serve} 
                        onChange={onChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </CardBody>
    </Card>
)


export default FoodForm;
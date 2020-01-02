import React from 'react';

class EditModal extends React.Component {

    render() {
        const {editIngredient, closeModal, deleteIngredient, handleEditChange, handleEditSubmit} = this.props;
        return(
            <div className='ei-modal-container'>
                <button id='editIngredient' onClick={closeModal}>x</button>
                <h5>Edit {editIngredient.ingredient.name}</h5>
                <form onSubmit={(e) => handleEditSubmit(e, editIngredient)}>
                    <input type="number" name='amount' step='0.1' min='0.0' placeholder="amount..." value={this.props.editIngredient.amount} onChange={handleEditChange} /><br /> <br />
                    <select name="unit" value={this.props.editIngredient.unit} onChange={handleEditChange}>
                        <option>Select a unit of measurement</option>
                        <option value={"cup"}>cup</option>
                        <option value={"oz"}>oz</option>
                        <option value={"pounds"}>pounds</option>
                        <option value={"tablespoons"}>tablespoons</option>
                        <option value={"number"}>quantity</option>
                    </select><br /> <br />
                    <button type="submit">edit ingredient</button>
                </form>
                <button id="delete-ingredient" onClick={() => deleteIngredient(editIngredient)}>Delete Ingredient</button>
            </div>
        )
    } 
}



export default EditModal;
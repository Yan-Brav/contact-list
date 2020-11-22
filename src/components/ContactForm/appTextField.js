import React from 'react';
import TextField from "@material-ui/core/TextField";

function AppTextField({field, meta}) {
    return (
            <TextField {...field}
                label={field.name.toUpperCase() + ':'}
                variant='outlined'
                helperText={meta.error}
                size='small'>
                <div className='form-field'>
                    <label htmlFor={field.name}>{field.name.toUpperCase() + ': '}</label>
                    <input name={field.name} value={meta.value} onChange={field.onChange}/>
                </div>
                {(meta.error && meta.touched) && <div className='error'>{meta.error}</div>}
            </TextField>
    );
}

export default AppTextField;

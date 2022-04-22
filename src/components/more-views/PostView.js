import React from 'react'

export const PostView = () => {
  return (
      
<div className='container-fluid h-auto d-flex flex-column gap-3 justify-content-center'>

<Post 
author="Messi" 
title="La Vida de Famoso" 
description="security standards that protect information in the health care industry. HIPAA violations can lead to civil penalties and fines depending on severity. Certain types of violations can also result in criminal penalties, which may include prison time"
date="hace 10 horas"
/>

<div className='d-flex flex-column gap-3'>
<form className='container-sm w-50 m-3 d-flex flex-column gap-3 border shadow m-2'>
<textarea class="form-control" rows="3"></textarea>
<button type="submit" className='btn btn-primary'>Comment</button>
</form>

</div>
    </div>
  )
}

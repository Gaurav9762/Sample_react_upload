const init={
    email:"",


}



export const RegForm = ()=>
{
 
    return(

        <div>
           
                <form>
                Emailid:<input type="text" name="email"></input><br/>
                    Password:<input type="password"></input><br/>
                    Gender:
                    <input type="radio" name="Male" value="Male"></input>
                    <label for="Male">Male</label>
                        
                    <input type="radio" name="Male" value="Male"></input>
                    <label for="Male">Female</label>
                    <br/>
                    City:<select name="cities" name="city"><br/>
                        <option value="Pune">select </option>
                        <option value="Pune"> Mumbai</option>
                        <option value="Pune"> Nashik</option>
                      </select><br/>
                    Emailid:<input type="text" ></input>
                    
                </form>
                    
            
        </div>
    )
}
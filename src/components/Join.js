import dogHeader from '../images/dogsplayingheader.jpg';

const Join = () => {
    return(
        <section>
            <div className='small-header-image-container'>
                <img src={dogHeader} className="small-header-image"/>
            </div>
            <h1 id='full'>Sorry we are full at the moment. Email doggydaycare@mail.se for more information.</h1>
        </section>
    )
}

export default Join;
import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import BackgroundImage from '../components/Backgroundİmage'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'
import { useNavigate } from 'react-router-dom'
export default function Signup() {


  // Şifrelerimzin Gözükmemesi için kullandığımız state
  const [showPassword, setshowPassword] = useState(false)
  // *************************************************/
  // Email ve Girişleri Yakalamak İçin Kullandığımız State
  const [formValues, setformValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  //*********************************************** */

  // *********************Firebase navigate ****************************/
  // Giriş Yapan Mevcut Kullanıcımızın Hangi Sayfaya Yönlendirileceğini Yazdık
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form">
            {/* Her İki İnput içindede formValuesten Gelen Methodları Çağırarak  İstediğimiz Ufak Bir Giriş State Oluşturduk */}
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setformValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setformValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {/* showPassword onClick Olunca Gözükmesini istediğimiz Get Started Gözükücek */}
            {!showPassword && (
              <button onClick={() => setshowPassword(true)}>Get Started</button>
            )}
          </div>
          {/* handleSignIn onClick olunca Json olarak bize consol üzerinden yazdırıcak */}
          {showPassword && <button onClick={handleSignIn} >Sign Up</button>}
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        color: white;
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
    showPassword ? '1fr 1fr' : '2fr 1fr'};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`

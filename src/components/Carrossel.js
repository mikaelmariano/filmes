import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../styles/Carrossel.css"
import obterDestaques from '../api/destaques.js';

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  //Aqui uso o destaques obtidos da api
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    async function fetchDestaques() {
      const data = await obterDestaques();
      setDestaques(data);
    }
    fetchDestaques();
  }, []);

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">

{/* Eu tentei usar direto os valores do array do fetchDestaques porem estava ocorrendo erro, fiquei algumas horas parado nisso porem a solucao foi verificar se ele tinha tamanho maior que 0 antes de carregar as informacoes */}

          <div className="keen-slider__slide number-slide1"
          style={{ backgroundImage: `url(${destaques.length > 0 ? destaques[0]?.image_url  : "Carregando..."|| 'url_da_imagem_padrao'})`}}>
            <div className="overlay">
            <h6>Destaque do Mês</h6>
            <h2>{destaques.length > 0 ? destaques[0].title  : "Carregando..."}</h2>
            <h6>
              <span className="rating">⭐ {destaques.length > 0 ? destaques[0]?.rating : "Carregando..."|| '0'}/10</span> |{destaques.length > 0 ? destaques[0]?.crew : "Carregando..." || 'Elenco do Filme 1'}
            </h6>
          </div></div>

          <div className="keen-slider__slide number-slide2"
          style={{ backgroundImage: `url(${destaques.length > 0 ? destaques[1]?.image_url  : "Carregando..."|| 'url_da_imagem_padrao'})` }}>
            <div className="overlay">
            <h6>Destaque do Mês</h6>
            <h2>{destaques.length > 0 ? destaques[1].title  : "Carregando..."}</h2>
            <h6>
              <span className="rating">⭐ {destaques.length > 0 ? destaques[1]?.rating : "Carregando..."|| '0'}/10</span> |{destaques.length > 0 ? destaques[1]?.crew : "Carregando..." || 'Elenco do Filme 1'}
            </h6>
          </div></div>

          <div className="keen-slider__slide number-slide3"
          style={{ backgroundImage: `url(${destaques.length > 0 ? destaques[2]?.image_url  : "Carregando..."|| 'url_da_imagem_padrao'})` }}>
            <div className="overlay">
            <h6>Destaque do Mês</h6>
            <h2>{destaques.length > 0 ? destaques[2].title  : "Carregando..."}</h2>
            <h6>
              <span className="rating">⭐ {destaques.length > 0 ? destaques[2]?.rating : "Carregando..."|| '0'}/10</span> |{destaques.length > 0 ? destaques[2]?.crew : "Carregando..." || 'Elenco do Filme 1'}
            </h6>
          </div></div>

        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}

{loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}


      </div>
      
    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

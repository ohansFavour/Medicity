import React, { useState, useEffect, useContext } from 'react'
import './Checkup.scss'
import DiagnosisStart from '../../containers/diagnosisStart/DiagnosisStart'
import Terms from '../../containers/Terms/Terms'
import Gender from '../../containers/Gender/Gender'
import Age from '../../containers/Age/Age'
import Symptoms from '../../containers/Symptoms/Symptoms'
import Questions from '../../containers/Questions/Questions'
import Result from '../../containers/Result/Result'
import SymptomsData from '../../assets/data/Symptoms def.json'
import { StoreContext } from '../../context/store'
import Spinner from '../../components/Spinner/Spinner'

const Checkup = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [isChecked, setIsChecked] = useState(false)
  const [data, setData] = useState<any>(null)
  const [result, setResult] = useState<any>(null)

  const { state, dispatch } = useContext(StoreContext)

  const fetchAsync = async () => {
    let url = `https://cors-anywhere.herokuapp.com/http://thehealthdome.pythonanywhere.com/?`
    const keysData = Object.keys(SymptomsData)
    dispatch({
      type: 'IS_LOADING',
    })
    data.forEach((entry, index) => {
      if (index === data.length - 1) {
        url = url + keysData[entry.number] + '=Yes'
      } else {
        url = url + keysData[entry.number] + '=Yes&'
      }
    })
    try {
      const dataAsync: any = await asyncFunc(url)
      const arr = dataAsync.split(',')

      const trans = arr.map((entry) => {
        return entry.replace('[', '')
      })
      const trans2 = trans.map((entry) => {
        return entry.replace(']', '')
      })
      const trans3 = trans2.map((entry) => {
        return entry.replace(/'/g, '')
      })
      const trans4 = trans3.map((entry) => {
        return entry.replace(/\s/g, '')
      })

      setResult(trans4)

      dispatch({
        type: 'NOT_LOADING',
      })
    } catch (e) {
      alert(e)
      dispatch({
        type: 'NOT_LOADING',
      })
    }
  }

  function asyncFunc(url): any {
    return new Promise((resolve, reject): any => {
      let xhr = new XMLHttpRequest()
      xhr.onerror = () => {
        reject('An Error Occured')
      }
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          resolve(this.response)
        }
      }
      xhr.open('GET', url)
      xhr.setRequestHeader('Accept', 'application/json')
      xhr.send()
    })
  }

  const handlePageIncrease = () => {
    if (pageNumber === 6) {
      fetchAsync()
    } else {
      setPageNumber(pageNumber + 1)
    }
  }
  const handlePageDecrease = () => {
    setPageNumber(pageNumber - 1)
  }
  const isDisabled = pageNumber === 2 && isChecked === false

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pageNumber])

  useEffect(() => {
    setResult(null)
  }, [])

  useEffect(() => {
    dispatch({
      type: 'NOT_LOADING',
    })
  }, [dispatch])

  useEffect(() => {
    if (result) {
      setPageNumber(7)
    }
  }, [result])

  return (
    <div className="checkup">
      <div className="checkup__container">
        <div className="checkup__summary">
          <div
            className={`checkup__item checkup--nil ${pageNumber < 3 ? 'checkup__emphasis' : ''}`}
          >
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Introduction</span>
          </div>
          <div
            className={`checkup__item  ${
              pageNumber > 2 && pageNumber < 5 ? 'checkup__emphasis' : ''
            }`}
          >
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Patient</span>
          </div>
          <div
            className={`checkup__item  ${
              pageNumber >= 5 && pageNumber < 7 ? 'checkup__emphasis' : ''
            }`}
          >
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Symptoms</span>
          </div>
          <div className={`checkup__item  ${pageNumber === 7 ? 'checkup__emphasis' : ''}`}>
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Results</span>
          </div>
        </div>
      </div>

      <div className="checkup__main">
        {state.isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className={`checkup__content ${pageNumber === 1 ? 'checkup__visible' : ''}`}>
              <DiagnosisStart />
            </div>
            <div className={`checkup__content ${pageNumber === 2 ? 'checkup__visible' : ''}`}>
              <Terms setIsChecked={setIsChecked} />
            </div>
            <div className={`checkup__content ${pageNumber === 3 ? 'checkup__visible' : ''}`}>
              <Gender />
            </div>
            <div className={`checkup__content ${pageNumber === 4 ? 'checkup__visible' : ''}`}>
              <Age />
            </div>
            <div className={`checkup__content ${pageNumber === 5 ? 'checkup__visible' : ''}`}>
              <Symptoms setData={setData} />
            </div>
            <div className={`checkup__content ${pageNumber === 6 ? 'checkup__visible' : ''}`}>
              <Questions />
            </div>
            <div className={`checkup__content ${pageNumber === 7 ? 'checkup__visible' : ''}`}>
              <Result data={result} />
            </div>
            <div className="checkup__footer">
              {pageNumber === 7 ? (
                <>
                  <button
                    // onClick={() => handlePageIncrease()}
                    style={{ cursor: 'pointer' }}
                    disabled={isDisabled}
                    className={`${isDisabled ? 'disabled' : ''}`}
                  >
                    Submit
                  </button>
                </>
              ) : (
                <>
                  {pageNumber !== 1 && (
                    <div onClick={() => handlePageDecrease()} style={{ cursor: 'pointer' }}>
                      <span> &lt; </span>Back
                    </div>
                  )}
                  <button
                    onClick={() => handlePageIncrease()}
                    style={{ cursor: 'pointer' }}
                    disabled={isDisabled}
                    className={`${isDisabled ? 'disabled' : ''}`}
                  >
                    Next
                  </button>
                </>
              )}
            </div>
          </>
        )}{' '}
      </div>
    </div>
  )
}

export default Checkup

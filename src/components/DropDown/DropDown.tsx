import React, { useState, useRef } from 'react'
import Image from 'next/image'
import useOutsideClick from '@/src/hooks/useOutsideClick'
import arrowDownIcon from '@/public/svgs/arrow-down.svg'
import styles from './DropDown.module.scss'

interface DropDownProps {
  options: { [key: string]: string }
  setOption: (value: string) => void
}

const DropDown: React.FC<DropDownProps> = ({ options, setOption }) => {
  const [isDrop, setIsDrop] = useState(false)
  const [selectedKey, setSelectedKey] = useState<string>('')
  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick(ref, setIsDrop)

  const arrowIconStyle = {
    transform: isDrop ? 'rotate(180deg)' : 'rotate(0deg)',
  }
  const handleOptionClick = (key: string) => {
    setSelectedKey(key)
    setOption(options[key])
    setIsDrop(false)
  }

  return (
    <div
      className={styles.container}
      ref={ref}
      onClick={() => setIsDrop(!isDrop)}
    >
      <div className={styles.dropDownButton}>
        <div>{selectedKey || '최신순'}</div>
        <div>
          <Image
            src={arrowDownIcon}
            alt="아래 화살표 아이콘"
            width={24}
            height={24}
            style={arrowIconStyle}
          />
        </div>
      </div>

      {isDrop && (
        <div className={styles.dropDownBox}>
          {Object.entries(options).map(([key, value]) => (
            <div
              key={key}
              className={styles.dropDownItem}
              onClick={() => handleOptionClick(key)}
            >
              {key}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropDown

import { useState } from 'react';
import { assetUrl } from '../utils/assetUrl';

export interface AccordionValueItem {
  num: string;
  title: string;
  description: string;
}

interface AccordionValuesProps {
  eyebrow: string;
  heading: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  items: AccordionValueItem[];
  showWatermark?: boolean;
}

/** Two-column editorial header + feature photo paired with an interactive 7-item accordion. */
export function AccordionValues({
  eyebrow,
  heading,
  intro,
  imageSrc,
  imageAlt,
  items,
  showWatermark = false,
}: AccordionValuesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="values-section">
      <div className="container-1440">
        <p className="values-section__eyebrow">{eyebrow}</p>

        <div className="values-section__header">
          <h2 className="values-section__title">{heading}</h2>
          <p className="values-section__intro">{intro}</p>
        </div>

        <div className="values-section__body">
          <div className="values-section__media">
            <img src={assetUrl(imageSrc)} alt={imageAlt} className="values-section__img" />
            <div className="blue-tint-overlay" />
            {showWatermark && <span className="watermark-77">77</span>}
          </div>

          <div className="accordion-list">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.num} className="accordion-item">
                  <button
                    type="button"
                    className="accordion-item__trigger"
                    aria-expanded={isOpen}
                    onClick={() => handleToggle(idx)}
                  >
                    <span className="accordion-item__num">{item.num}</span>
                    <span className="accordion-item__heading">{item.title}</span>
                    <span className="accordion-item__icon" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33337 8H12.6667"
                          stroke="#1E1E1E"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {!isOpen && (
                          <path
                            d="M8 3.33334V12.6667"
                            stroke="#1E1E1E"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="accordion-item__panel">
                      <p className="accordion-item__desc">{item.description}</p>
                    </div>
                  )}

                  {idx < items.length - 1 && (
                    <img
                      src={assetUrl('/assets/line-12.svg')}
                      alt=""
                      width={733}
                      height={1}
                      className="accordion-item__divider"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

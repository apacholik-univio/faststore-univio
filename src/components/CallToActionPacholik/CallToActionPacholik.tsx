import React from "react";
import { Link } from '@faststore/ui'

import styles from './CallToActionPacholik.module.scss';

export interface CallToActionProps {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export function CallToActionPacholik(props: CallToActionProps) {
  return (
    <section className={styles.callToActionPacholik}>
      <div>
        <h2>{props.title}</h2>
        <Link href={props.link.url}>{props.link.text}</Link>
      </div>
    </section>
  );
}
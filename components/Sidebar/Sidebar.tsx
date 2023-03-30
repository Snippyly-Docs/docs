import { Folder, Heading, Meta, MetaJsonFile, PageMapItem, PageOpts } from 'nextra';
import { useEffect } from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  pageOpts: PageOpts;
}

interface CustomPageMeta {
  hidden?: boolean;
  title?: string;
}

interface CustomHeading extends Heading {
  id: string;
}

export default function Sidebar(props: SidebarProps) {

  const { pageMap, headings, route } = props.pageOpts;

  const renderHeadings = () => {
    return headings.map((heading, idx) => {

      let data = heading as CustomHeading;
      if (idx === 0) {
        data.value = 'Overview';
      }

      if (data.depth > 1) return null;

      return (
        <li key={data.value} className={styles.listItem}>
          <a className={styles.header} href={`#${data.id}`}>{data.value}</a>
        </li>
      );
    });
  }

  const renderChildren = (children: Array<PageMapItem>, meta: {[key: string]: Meta}) => {
    return children.sort((a, b) => {

      if (a.kind === 'MdxPage' && b.kind === 'MdxPage') {
        const keys = Object.keys(meta);
        return keys.findIndex((key) => (key === a.name)) < keys.findIndex((key) => (key === b.name)) ? -1 : 1;

      }
      return -1;

    }).map((child) => {
      if (child.kind === 'MdxPage') {

        const customMeta = meta[child.name] as CustomPageMeta;
        if (customMeta?.hidden) return null;

        return (
          <li key={child.route} className={styles.listItem}>
            { child.route === route ? 
              <details open={true}>
                <summary className={styles.summary}>{ customMeta && customMeta.title ? customMeta.title : child.name}</summary>
                <ul className={styles.list}>{ renderHeadings() }</ul>
              </details> :
              <a className={styles.pageLink} href={child.route}>{ customMeta && customMeta.title ? customMeta.title : child.name}</a>
            }
          </li>
        );
      } else if (child.kind === 'Folder') {

        const _meta = child.children.find((item) => item.kind === 'Meta') as MetaJsonFile;
        const customMeta = meta[child.name] as CustomPageMeta;
        const isActiveFolder = route.includes(child.name);

        return (
          <li key={child.route} className={styles.listItem}>
            <details open={isActiveFolder}>
              <summary className={styles.summary}>{ customMeta && customMeta.title ? customMeta.title : child.name }</summary>
              <ul className={styles.list}>{renderChildren(child.children, _meta.data)}</ul>
            </details>
          </li>
        );
      }
      return null;
    });
  }

  const sidebarItems = pageMap.filter((item) => item.kind !== 'Meta');
  let meta = pageMap.find((item) => (item.kind === 'Meta')) as MetaJsonFile;
  return <ul className={`${styles.list} ${styles.sidebar}`}>{renderChildren(sidebarItems, meta.data)}</ul>;
}
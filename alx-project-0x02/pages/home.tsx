// pages/home.tsx
import React from 'react';
import Card from '@/components/common/Card';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Card title="Card Title" content="This is the card content." footer="Card Footer" />
    </div>
  );
}
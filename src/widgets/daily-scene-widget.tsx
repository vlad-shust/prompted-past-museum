import { Image, Spacer, Text, VStack, ZStack } from '@expo/ui/swift-ui';
import {
  background,
  font,
  foregroundColor,
  frame,
  lineLimit,
  padding,
  shadow,
  widgetURL,
} from '@expo/ui/swift-ui/modifiers';
import { Widget } from 'expo-widgets';

import type { DailySceneWidgetProps } from './daily-scene-widget.types';

/**
 * The home-screen painting. The layout function compiles to SwiftUI and
 * runs in the widget extension ('widget' directive); the app feeds it a
 * file:// image cached in the shared App Group container (see
 * src/lib/widget-sync.ts).
 */
function DailySceneLayout(props: DailySceneWidgetProps) {
  'widget';

  if (!props.imageUri) {
    return (
      <VStack
        spacing={6}
        modifiers={[
          frame({ maxWidth: Infinity, maxHeight: Infinity }),
          background('#0A0908'),
          padding({ all: 12 }),
          widgetURL(props.linkUrl),
        ]}
      >
        <Spacer />
        <Text modifiers={[foregroundColor('#FFB454'), font({ size: 11 })]}>◆</Text>
        <Text modifiers={[foregroundColor('#F5EDE3'), font({ size: 13, weight: 'semibold' })]}>
          prompted.past
        </Text>
        <Text modifiers={[foregroundColor('#A89F94'), font({ size: 11 })]}>
          Open to light today’s scene
        </Text>
        <Spacer />
      </VStack>
    );
  }

  return (
    <ZStack
      modifiers={[
        frame({ maxWidth: Infinity, maxHeight: Infinity }),
        background('#0A0908'),
        // One widgetURL per hierarchy: the whole tile opens today's lesson.
        widgetURL(props.linkUrl),
      ]}
    >
      <Image
        uiImage={props.imageUri}
        modifiers={[frame({ maxWidth: Infinity, maxHeight: Infinity })]}
      />
      <VStack
        alignment="leading"
        spacing={2}
        modifiers={[frame({ maxWidth: Infinity, maxHeight: Infinity }), padding({ all: 10 })]}
      >
        <Spacer />
        <Text
          modifiers={[
            foregroundColor('#FFB454'),
            font({ size: 9, weight: 'medium' }),
            shadow({ radius: 3, color: '#000000', y: 1 }),
          ]}
        >
          {props.dateLabel.toUpperCase()}
        </Text>
        <Text
          modifiers={[
            foregroundColor('#F5EDE3'),
            font({ size: 14, weight: 'semibold', design: 'serif' }),
            shadow({ radius: 4, color: '#000000', y: 1 }),
            lineLimit(2),
          ]}
        >
          {props.title}
        </Text>
      </VStack>
    </ZStack>
  );
}

function createDailySceneWidget(): Widget<DailySceneWidgetProps> | null {
  try {
    return new Widget<DailySceneWidgetProps>('DailyScene', DailySceneLayout);
  } catch {
    // Native module absent (e.g. running without the widget target built).
    return null;
  }
}

export const dailySceneWidget = createDailySceneWidget();
